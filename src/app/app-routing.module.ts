import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import {ProductosComponent} from './productos/productos.component';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'Home' ,component:HomeComponent},
  {path: 'Productos',component:ProductosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
