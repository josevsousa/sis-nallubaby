// import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { environment } from 'src/environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AuthService } from "./services/auth.service";
import { ProdutosService } from "./services/produtos.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { InicioComponent } from "./inicio/inicio.component";


import { 
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatGridListModule,
  MatDialogModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSelectModule
} from "@angular/material";

import { CadastroService } from "./services/cadastro.service";
import { PedidoService } from "./services/pedido.service";
import { PedidosService } from "./services/pedidos.service";

import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';
import { ProdutoDialogComponent } from './pages/produtos/produto-dialog/produto-dialog.component';
import { AuthComponent } from './components/auth/auth.component';

import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./guards/auth.guard";
import { ClientesComponent } from './pages/clientes-colaboradores/clientes/clientes.component';
import { ColaboradoresComponent } from './pages/clientes-colaboradores/colaboradores/colaboradores.component';
import { CadastroDialogComponent } from './pages/clientes-colaboradores/cadastro-dialog/cadastro-dialog.component';
import { CaixaInicialComponent } from './pages/caixa/caixa-inicial/caixa-inicial.component';
import { CaixaCadastroComponent } from './pages/caixa/caixa-cadastro/caixa-cadastro.component';
import { LiItemComponent } from './pages/caixa/components/li-item/li-item.component';
import { HistoricoInicioComponent } from './pages/historico/historico-inicio/historico-inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    InicioComponent,
    ProdutosListaComponent,
    AuthComponent,
    LoginComponent,
    ProdutoDialogComponent,
    ClientesComponent,
    ColaboradoresComponent,
    CadastroDialogComponent,
    CaixaInicialComponent,
    CaixaCadastroComponent,
    LiItemComponent,
    HistoricoInicioComponent
  ],
  entryComponents: [
    ProdutoDialogComponent,
    CadastroDialogComponent 
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ProdutosService,
    CadastroService,
    PedidoService,
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
