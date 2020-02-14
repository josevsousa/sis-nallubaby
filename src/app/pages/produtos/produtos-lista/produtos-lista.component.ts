import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";

import { Produto } from "../../../models/produtos.model";
import { ProdutosService } from '../../../services/produtos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProdutoDialogComponent } from '../produto-dialog/produto-dialog.component';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos$: Observable<Produto[]>;  // $ pra indicar que é um observable
  loading = true;

  constructor(
    private location: Location,
    private dialog: MatDialog,
    private produtosService: ProdutosService
  ) { 
  }

  ngOnInit(): void{
    this.produtos$ = this.produtosService.produtos.valueChanges();

    // delegar carregamento dos produtos para o loading no spinner
    this.produtos$
      .pipe(take(2))
      .subscribe( () => this.loading = false )
    
  }

  backPage(){
    this.location.back();
  }


  showDialog(produto?: Produto){
    // config recebe produto para enviar para o Dialog
    const config: MatDialogConfig<any> = (produto)? {data: { produto }}: null ;
    this.dialog.open(ProdutoDialogComponent, config);
  }

  onDelete(produto: Produto): void {
    this.produtosService.delete(produto);
  }


}
