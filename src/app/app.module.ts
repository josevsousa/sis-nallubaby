import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    BrowserAnimationsModule,
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
