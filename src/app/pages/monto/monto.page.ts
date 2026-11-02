import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel,
} from '@ionic/angular/standalone';
import { Modo, PedidoService } from '../../services/pedido';

@Component({
  selector: 'app-monto',
  standalone: true,
  templateUrl: './monto.page.html',
  styleUrls: ['./monto.page.scss'],
  imports: [IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel],
})
export class MontoPage {
  private router = inject(Router);
  pedido = inject(PedidoService);

  atajos = computed(() =>
    this.pedido.modo() === 'pesos' ? [5000, 10000, 15000, 20000] : [5, 10, 15, 20]
  );

  formatear(n: number): string {
    return this.pedido.modo() === 'pesos'
      ? '$' + n.toLocaleString('es-AR')
      : n + ' L';
  }

  cambiarModo(ev: CustomEvent) {
    this.pedido.modo.set(ev.detail.value as Modo);
    this.pedido.valor.set(0);
  }

  elegir(n: number) {
    this.pedido.valor.set(n);
  }

  escribir(ev: Event) {
    const limpio = (ev.target as HTMLInputElement).value.replace(',', '.');
    const n = parseFloat(limpio);
    this.pedido.valor.set(isNaN(n) || n < 0 ? 0 : n);
  }

  confirmar() {
    if (this.pedido.valor() <= 0) return;
    this.router.navigateByUrl('/resumen');
  }
}