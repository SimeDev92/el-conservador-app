import { New } from './../../interfaces/news.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'news-new-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public new!: New;


  ngOnInit(): void {
    if ( !this.new ) throw Error('New property is required');
  }
  shareOnWhatsApp() {
    // Implementación pendiente
  }

  shareOnFacebook() {
    // Implementación pendiente
  }

  shareOnTwitter() {
    // Implementación pendiente
  }
  copyLink(){
    // Implementación pendiente
  }

}
