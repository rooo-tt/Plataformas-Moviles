import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, arrowForward, checkmarkCircle } from 'ionicons/icons';
import { PedidoService } from '../../services/pedido';

interface Surtidor {
  numero: number;
  disponible: boolean;
}

@Component({
  selector: 'app-surtidores',
  standalone: true,
  templateUrl: './surtidores.page.html',
  styleUrls: ['./surtidores.page.scss'],
  imports: [IonContent, IonButton, IonIcon, RouterLink],
})
export class SurtidoresPage {
  private router = inject(Router);
  pedido = inject(PedidoService);

  surtidores: Surtidor[] = [
    { numero: 1, disponible: false },
    { numero: 2, disponible: true },
    { numero: 3, disponible: true },
    { numero: 4, disponible: true },
  ];

  constructor() {
    addIcons({ arrowBack, arrowForward, checkmarkCircle });
  }

  elegir(s: Surtidor) {
    if (!s.disponible) return;
    this.pedido.surtidor.set(s.numero);
  }

  continuar() {
    if (this.pedido.surtidor() === null) return;
    this.router.navigateByUrl('/combustible');
  }
}