import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonContent, IonButton } from '@ionic/angular/standalone';
import { PedidoService } from '../../services/pedido';

@Component({
  selector: 'app-resumen',
  standalone: true,
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  imports: [IonContent],
  providers: [AlertController],
})
export class ResumenPage {
  private router = inject(Router);
  private alertCtrl = inject(AlertController);
  pedido = inject(PedidoService);

  formatoPesos(n: number): string {
    return '$' + Math.round(n).toLocaleString('es-AR');
  }

  formatoLitros(n: number): string {
    return n.toLocaleString('es-AR', { maximumFractionDigits: 2 });
  }

  async confirmar() {
    const alerta = await this.alertCtrl.create({
      header: 'Pago confirmado',
      message: 'Acercate al surtidor ' + this.pedido.surtidor() + ' para cargar.',
      buttons: ['OK'],
    });
    await alerta.present();
    await alerta.onDidDismiss();
    this.pedido.reiniciar();
    this.router.navigateByUrl('/home');
  }
}
