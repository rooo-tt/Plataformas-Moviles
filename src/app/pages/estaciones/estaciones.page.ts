import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { star, heart, arrowBack, calendarOutline, walkOutline, storefrontOutline } from 'ionicons/icons';
import { PedidoService } from '../../services/pedido';


@Component({
  selector: 'app-estaciones',
  standalone: true,
  templateUrl: './estaciones.page.html',
  styleUrls: ['./estaciones.page.scss'],
  imports: [IonicModule, RouterLink],
})
export class EstacionesPage {
  private router = inject(Router);
  private pedido = inject(PedidoService);

  estaciones = [
    { nombre: 'YPF', categoria: 'Estación de servicio', distancia: '1.2 km' },
    { nombre: 'Shell', categoria: 'Estación de servicio', distancia: '1.8 km' },
    { nombre: 'Puma', categoria: 'Estación de servicio', distancia: '2.4 km' },
  ];

  favoritas = new Set<string>();

  constructor() {
    addIcons({ star, heart, arrowBack, calendarOutline, walkOutline, storefrontOutline });
  }

  volver() {
    this.router.navigateByUrl('/home');
  }

  toggleFav(nombre: string, ev: Event) {
    ev.stopPropagation();
    this.favoritas.has(nombre) ? this.favoritas.delete(nombre) : this.favoritas.add(nombre);
  }

  elegir(nombre: string) {
    this.pedido.estacion.set(nombre);
    this.router.navigateByUrl('/surtidores');
  }
}
