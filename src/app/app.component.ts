import { Component } from '@angular/core';
import { IonApp, IonButtons, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonButtons],
})
export class AppComponent {
  constructor() {
    
  }
}

