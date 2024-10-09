import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {

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
