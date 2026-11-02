import { Injectable, computed, signal } from '@angular/core';

export type Combustible = 'Super' | 'Infinia' | 'Infinia Diesel';
export type Modo = 'pesos' | 'litros';

// Precios por litro de ejemplo: cambialos por los reales o traelos de tu API
export const PRECIOS: Record<Combustible, number> = {
  'Super': 2000,
  'Infinia': 2300,
  'Infinia Diesel': 2200,
};

@Injectable({ providedIn: 'root' })
export class PedidoService {
  estacion = signal<string>('');
  surtidor = signal<number | null>(null);
  combustible = signal<Combustible | null>(null);
  modo = signal<Modo>('pesos');
  valor = signal<number>(0); // pesos o litros según el modo

  precioLitro = computed(() => {
    const c = this.combustible();
    return c ? PRECIOS[c] : 0;
  });

  total = computed(() =>
    this.modo() === 'pesos' ? this.valor() : Math.round(this.valor() * this.precioLitro())
  );

  litros = computed(() => {
    const p = this.precioLitro();
    if (!p) return 0;
    return this.modo() === 'litros' ? this.valor() : this.valor() / p;
  });

  reiniciar() {
    this.estacion.set('');
    this.surtidor.set(null);
    this.combustible.set(null);
    this.modo.set('pesos');
    this.valor.set(0);
  }
}