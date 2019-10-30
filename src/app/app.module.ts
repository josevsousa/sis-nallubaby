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

import { ProdutosListaComponent } from './pages/produtos/produtos-lista/produtos-lista.component';
import { ProdutoDialogComponent } from './pages/produtos/produto-dialog/produto-dialog.component';
import { AuthComponent } from './components/auth/auth.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    InicioComponent,
    ProdutosListaComponent,
    AuthComponent,
    LoginComponent,
    ProdutoDialogComponent
  ],
  entryComponents: [
    ProdutoDialogComponent,
    // CadastroDialogComponent 
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
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
  providers: [AuthService, AuthGuard, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
