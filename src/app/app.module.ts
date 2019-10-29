// import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';



import { environment } from 'src/environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";


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
import { ProdutosDialogComponent } from './pages/produtos/produtos-dialog/produtos-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    InicioComponent,
    ProdutosListaComponent,
    ProdutosDialogComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
