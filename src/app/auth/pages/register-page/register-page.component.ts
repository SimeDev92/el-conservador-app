import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]]
  });

  register() {
    if (this.registerForm.invalid) return;

    const { email, password, name, surname } = this.registerForm.value;
    this.authService.register(email, password, name, surname)
      .subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Cuenta creada',
            text: 'Tu cuenta ha sido creada exitosamente.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#007BFF',
          }).then(() => {
            this.router.navigateByUrl('auth/login');
          });
        },
        error: (message) => {
          Swal.fire({
            title: 'Error',
            text: message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#007BFF',
          });
        }
      });
  }
}
