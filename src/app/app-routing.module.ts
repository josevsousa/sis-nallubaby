import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";

import { LoginComponent } from "./login/login.component";
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';

import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  { path: 'login',  component: LoginComponent},
  { path: 'inicio',  component: InicioComponent},
  { path: 'produtosLista', component: ProdutosListaComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: '**', component: InicioComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
