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


import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { CadastroService } from "./services/cadastro.service";
import { PedidoService } from "./services/pedido.service";


import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";
  
import { ClientesComponent } from './pages/clientes-colaboradores/clientes/clientes.component';
import { ColaboradoresComponent } from './pages/clientes-colaboradores/colaboradores/colaboradores.component';
import { CadastroDialogComponent } from './pages/clientes-colaboradores/cadastro-dialog/cadastro-dialog.component';
import { CaixaInicialComponent } from './pages/caixa/caixa-inicial/caixa-inicial.component';
import { CaixaCadastroComponent } from './pages/caixa/caixa-cadastro/caixa-cadastro.component';
import { LiItemComponent } from './pages/caixa/components/li-item/li-item.component';
import { HistoricoInicioComponent } from './pages/historico/historico-inicio/historico-inicio.component';
import { ProdutoDialogComponent } from './pages/produtos/produto-dialog/produto-dialog.component';
import { ProdutosTableListComponent } from './pages/produtos/produtos-table-list/produtos-table-list.component';
import { ProdutosListaComponent } from "./pages/produtos/produtos-lista/produtos-lista.component";
import { RomaneioPrintComponent } from './components/romaneio-print/romaneio-print.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgxMaskModule, IConfig } from "ngx-mask";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    InicioComponent,
    AuthComponent,
    LoginComponent,
    ProdutoDialogComponent,
    ClientesComponent,
    ColaboradoresComponent,
    CadastroDialogComponent,
    CaixaInicialComponent,
    CaixaCadastroComponent,
    LiItemComponent,
    HistoricoInicioComponent,
    ProdutosTableListComponent,
    ProdutosListaComponent,
    RomaneioPrintComponent
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
    NgxMaskModule.forRoot(options),
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
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard,
    ProdutosService,
    CadastroService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
