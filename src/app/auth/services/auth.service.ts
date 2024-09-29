import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { environments } from '../../../environments/environments';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from '../interfaces/register-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.cheking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
   }

  private setAuthentication( user: User, token: string ):boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(( { user, token }) => this.setAuthentication( user, token )),
        catchError(err => throwError(() => err.error.message))
      );
  }

  register(email: string, password: string, name: string, surname: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, password, name, surname };

    return this.http.post<RegisterResponse>(url, body)
      .pipe(
        map(response => {
          const { user, token } = response;

          this._currentUser.set(user);
          this._authStatus.set(AuthStatus.registered);

          localStorage.setItem('token', token);

          return true;
        }),
        catchError(err => throwError(() => err.error.message))
      );
  }

  checkAuthStatus(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if (!token){
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(( { user, token }) => this.setAuthentication( user, token )),
        catchError(() => {
          this._authStatus.set( AuthStatus.notAuthenticated );
          return of(false);
        })
      );
  }

  logout(){

    localStorage.removeItem('token');
    this._currentUser.set( null );
    this._authStatus.set( AuthStatus.notAuthenticated );

  }
}
