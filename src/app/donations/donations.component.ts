import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {

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
    { label: 'Publicar', icon: 'publish', url: '/packages' }
  ];

  constructor(private router: Router) {}

  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  processSingleDonation() {
    console.log('Processing single donation');
  }

  processMonthlyDonation() {
    console.log('Processing monthly donation');
  }
}
