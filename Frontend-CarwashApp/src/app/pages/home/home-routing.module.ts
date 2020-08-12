import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../registro-usuario/registro-usuario.module#RegistroUsuarioPageModule'
      },
      {
        path: 'tab3',
        loadChildren: '../usuario/usuario.module#UsuarioPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}