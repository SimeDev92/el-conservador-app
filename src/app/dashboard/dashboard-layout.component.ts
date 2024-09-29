import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html',
  styles: [

  ]
})
export class DashboardLayoutComponent {

  private authservice = inject( AuthService);
  public user = computed(() => this.authservice.currentUser());


  onLogout(){
    this.authservice.logout();
  }
}
