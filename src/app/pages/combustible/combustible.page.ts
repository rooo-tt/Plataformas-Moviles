import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Combustible, PedidoService } from '../../services/pedido';
import { addIcons } from 'ionicons';
import { water, checkmarkCircle, arrowForward } from 'ionicons/icons';

@Component({
  selector: 'app-combustible',
  standalone: true,
  templateUrl: './combustible.page.html',
  styleUrls: ['./combustible.page.scss'],
  imports: [IonContent, IonButton, IonIcon],
})
export class CombustiblePage {

  private router = inject(Router);
  pedido = inject(PedidoService);

  opciones: { id: Combustible; clase: string }[] = [
    { id: 'Super', clase: 'super' },
    { id: 'Infinia', clase: 'infinia' },
    { id: 'Infinia Diesel', clase: 'diesel' },
  ];

  constructor() {
    addIcons({
      water,
      checkmarkCircle,
      arrowForward
    });
  }

  elegir(c: Combustible) {
    this.pedido.combustible.set(c);
  }

  continuar() {
    if (!this.pedido.combustible()) return;
    this.router.navigateByUrl('/monto');
  }
}