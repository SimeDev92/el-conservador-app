import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {
  private stripePromise = loadStripe('tu_stripe_public_key'); // Reemplaza con tu clave pública de Stripe
  donationType: string = 'single'; // Tipo de donación (única o mensual)
  selectedAmount: number | null = null; // Monto seleccionado
  singleDonationAmounts = [1, 5, 10, 20, 50, 100]; // Opciones para donaciones únicas
  monthlyDonationAmounts = [5, 10, 20, 50]; // Opciones para donaciones mensuales

  constructor(private http: HttpClient, private router: Router) {}

  // Procesar la donación única
  async processSingleDonation() {
    if (!this.selectedAmount) {
      alert('Por favor, selecciona un monto de donación.');
      return;
    }

    const priceId = this.getPriceIdForAmount(this.selectedAmount, 'single');
    if (!priceId) {
      alert('El monto seleccionado no es válido.');
      return;
    }

    // Llamada al backend para crear la sesión de pago en Stripe
    this.http.post<any>('http://localhost:3000/payments/create-checkout-session', { priceId })
      .subscribe(async (response) => {
        const stripe = await this.stripePromise;
        // Redirige al usuario a la página de pago de Stripe
        stripe?.redirectToCheckout({ sessionId: response.sessionId });
      }, error => {
        console.error('Error al crear la sesión de pago:', error);
      });
  }

  // Procesar la donación mensual
  async processMonthlyDonation() {
    if (!this.selectedAmount) {
      alert('Por favor, selecciona un monto de donación mensual.');
      return;
    }

    const priceId = this.getPriceIdForAmount(this.selectedAmount, 'monthly');
    if (!priceId) {
      alert('El monto seleccionado no es válido.');
      return;
    }

    // Llamada al backend para crear la sesión de pago en Stripe
    this.http.post<any>('http://localhost:3000/payments/create-checkout-session', { priceId })
      .subscribe(async (response) => {
        const stripe = await this.stripePromise;
        // Redirige al usuario a la página de pago de Stripe
        stripe?.redirectToCheckout({ sessionId: response.sessionId });
      }, error => {
        console.error('Error al crear la sesión de pago:', error);
      });
  }

  // Obtiene el priceId según el monto seleccionado y el tipo de donación
  private getPriceIdForAmount(amount: number, type: 'single' | 'monthly'): string | null {
    // Mapeo de los priceIds correspondientes para las donaciones únicas y mensuales
    const priceMapping: { [key: string]: { [key: number]: string } } = {
      single: {
        1: 'price_id_1', // Reemplaza con los priceIds de Stripe
        5: 'price_id_5',
        10: 'price_id_10',
        20: 'price_id_20',
        50: 'price_id_50',
        100: 'price_id_100',
      },
      monthly: {
        5: 'price_id_monthly_5',
        10: 'price_id_monthly_10',
        20: 'price_id_monthly_20',
        50: 'price_id_monthly_50',
      },
    };

    if (priceMapping[type] && priceMapping[type][amount] !== undefined) {
      return priceMapping[type][amount];
    }

    // Si no existe, retorna null
    return null;
  }

  // Método para abrir enlaces externos
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
