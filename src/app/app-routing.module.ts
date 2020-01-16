import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';
import { ProdutosTableListComponent } from "./pages/produtos/produtos-table-list/produtos-table-list.component";
import { ClientesComponent } from './pages/clientes-colaboradores/clientes/clientes.component';
import { ColaboradoresComponent } from './pages/clientes-colaboradores/colaboradores/colaboradores.component';
import { CaixaInicialComponent } from "./pages/caixa/caixa-inicial/caixa-inicial.component";
import { HistoricoInicioComponent } from "./pages/historico/historico-inicio/historico-inicio.component";

import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";

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
  { path: ' ', redirectTo:'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'inicio',  component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'caixa', component: CaixaInicialComponent, canActivate: [AuthGuard] },
  { path: 'colaboradores', component: ColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'produtos', component: ProdutosTableListComponent, canActivate: [AuthGuard] },
  { path: 'historico', component: HistoricoInicioComponent, canActivate: [AuthGuard]},
  // { path: '**', component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
