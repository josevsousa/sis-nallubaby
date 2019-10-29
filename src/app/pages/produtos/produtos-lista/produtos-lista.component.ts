import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";


import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  items: Observable<any[]>;

  constructor(
    private db: AngularFirestore,
    private location: Location,
    private dialog: MatDialog,
  ) { 
    this.items = this.db.collection('produtos').valueChanges();
  }

  ngOnInit() {
  }

  backPage(){
    this.location.back();
  }


}
