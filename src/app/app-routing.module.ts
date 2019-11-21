import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';
import { ClientesComponent } from './pages/clientes-colaboradores/clientes/clientes.component';
import { ColaboradoresComponent } from './pages/clientes-colaboradores/colaboradores/colaboradores.component';
import { CaixaInicialComponent } from "./pages/caixa/caixa-inicial/caixa-inicial.component";

import { AuthGuard } from "./guards/auth.guard";

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('../app/inicio/inicio.component').then(m => m.InicioComponent) 
//   },
//   {
//     path: '',
//     loadChildren: () => import('../app/login/login.component').then(m => m.LoginComponent) 
//   },
//   {
//     path: '',
//     loadChildren: () => import('../app/pages/produtos/produtos-lista/produtos-lista.component').then(m => m.ProdutosListaComponent) 
//   }

// ]

const routes: Routes = [
  { path: 'login',  component: LoginComponent},
  { path: 'inicio',  component: InicioComponent},
  { path: 'caixa', component: CaixaInicialComponent},
  { path: 'colaboradores', component: ColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'produtos', component: ProdutosListaComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: '**', component: InicioComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
