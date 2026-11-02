import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  imports: [IonicModule, RouterLink],
})
export class InicioSesionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
