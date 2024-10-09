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

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
