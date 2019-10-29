import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  constructor(
    private location: Location,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  backPage(){
    this.location.back();
  }

}
