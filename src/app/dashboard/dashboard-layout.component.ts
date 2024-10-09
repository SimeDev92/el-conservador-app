import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());

  public activePackage = {
    name: 'Paquete Premium',
    details: 'Publicaciones ilimitadas - 30 días restantes'
  };

  public stats = {
    publishedNews: 25,
    totalViews: 12345,
    totalComments: 789
  };

  public latestNews = [
    { title: 'Nueva ley de impuestos aprobada', date: new Date() },
    { title: 'Récord de exportaciones en el sector agrícola', date: new Date(Date.now() - 86400000) },
    { title: 'Debate sobre la reforma educativa', date: new Date(Date.now() - 172800000) }
  ];

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Buscar', icon: 'search', url: './search' },
    { label: 'Política', icon: 'gavel', url: './category/Politics' },
    { label: 'Economía', icon: 'attach_money', url: './category/Economy' },
    { label: 'Sociedad', icon: 'people', url: './category/Society' },
    { label: 'Ciencia y Tecnología', icon: 'science', url: './category/ScienceTechnology' },
    { label: 'Cultura', icon: 'palette', url: './category/Culture' },
    { label: 'Deportes', icon: 'sports_soccer', url: './category/Sports' },
    { label: 'Opinión', icon: 'forum', url: './category/Opinion' },
    { label: 'Publicar', icon: 'publish', url: '/packages' },
    { label: 'Donar', icon: 'volunteer_activism', url: '/donations' }
  ];

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  onEditProfile() {
    console.log('Editar perfil');
  }

  onLogout() {
    this.authService.logout();
  }
}
