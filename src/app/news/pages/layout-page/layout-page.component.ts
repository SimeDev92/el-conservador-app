import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

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


  constructor(private router: Router) {}

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

}
