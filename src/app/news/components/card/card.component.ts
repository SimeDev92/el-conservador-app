import { New } from './../../interfaces/news.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'news-new-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public new!: New;


  ngOnInit(): void {
    if ( !this.new ) throw Error('New property is required');
  }

}
