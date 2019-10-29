import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';

const routes: Routes = [
  { path: 'inicio',  component: InicioComponent},
  { path: 'produtosLista', component: ProdutosListaComponent },
  { path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: '**', component: InicioComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
