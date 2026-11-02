import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'estaciones',
    loadComponent: () => import('./pages/estaciones/estaciones.page').then(m => m.EstacionesPage)
  },
  {
    path: 'surtidores',
    loadComponent: () => import('./pages/surtidores/surtidores.page').then(m => m.SurtidoresPage)
  },
  {
    path: 'combustible',
    loadComponent: () => import('./pages/combustible/combustible.page').then(m => m.CombustiblePage)
  },
  {
    path: 'monto',
    loadComponent: () => import('./pages/monto/monto.page').then(m => m.MontoPage)
  },
  {
    path: 'resumen',
    loadComponent: () => import('./pages/resumen/resumen.page').then(m => m.ResumenPage)
  },

  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then(m => m.RegistroPage)
  },
];