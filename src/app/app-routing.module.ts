import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/componentes/pages/home/home.component';
import{ItemComponent} from '../app/componentes/pages/item/item.component';
import {AboutComponent} from '../app/componentes/pages/about/about.component';
import { BusquedaComponent } from './componentes/pages/busqueda/busqueda.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'item/:id', component: ItemComponent},
  {path:'about', component: AboutComponent},
  {path:'buscar/:textoBusc', component: BusquedaComponent},
  {path:'**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
