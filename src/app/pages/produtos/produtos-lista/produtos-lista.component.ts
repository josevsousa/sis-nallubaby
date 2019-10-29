import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";


import { MatDialog, MatDialogConfig } from '@angular/material';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  items: Observable<any[]>;

  constructor(
    public afAuth: AngularFireAuth,
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

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
