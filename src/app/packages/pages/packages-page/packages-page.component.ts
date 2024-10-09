import { Component } from '@angular/core';

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css']
})
export class PackagesPageComponent {
  public packages = [
    {
      name: 'Francisco',
      image: 'francisco.jpg',
      description: 'Una publicación diaria durante un mes con máxima visibilidad, incluyendo banners en la página principal.',
      price: 30,
      features: ['Publicación diaria', 'Máxima visibilidad', 'Banner en página principal']
    },
    {
      name: 'José Antonio',
      image: 'jose-antonio.jpg',
      description: '2-3 publicaciones semanales durante un mes, con visibilidad destacada.',
      price: 20,
      features: ['2-3 publicaciones semanales', 'Visibilidad destacada']
    },
    {
      name: 'Isabel',
      image: 'isabel.jpg',
      description: '1 publicación semanal durante un mes, con visibilidad básica.',
      price: 15,
      features: ['1 publicación semanal', 'Visibilidad básica']
    }
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
  ];

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
