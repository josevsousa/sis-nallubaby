import { Component, OnInit, Inject } from '@angular/core';
import { Produto } from '../../../models/produtos.model';
import { ProdutosService } from '../../../services/produtos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.css']
})
export class ProdutoDialogComponent implements OnInit {

  dialogTitle = "Novo Produto";

  novoProduto: Produto = { 
    codigo: null,
    nome: '',
    valor: null,
    descricao: ''
    };
  
  atualizarProduto = false;
  

  constructor(
    //injetando dados no dialog
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProdutoDialogComponent>,
    private produtoService: ProdutosService
  ) {}

 
  //ver se esta vindo algum produto
  ngOnInit(): void {
    if(this.data){
      this.dialogTitle = 'Registros do produto';
      this.atualizarProduto = true;
      this.novoProduto = this.data.produto; 
    }else{
      this.maiorCodigo();
    };

  }

  maiorCodigo(): void{
    this.produtoService.produtos.valueChanges().forEach(i => {
      let maiorCod = 0;
      i.forEach((j)=>{
         if(j.codigo > maiorCod){
           maiorCod = j.codigo;
         }
      });
      this.novoProduto.codigo = maiorCod+1;
    });
  }
 
  onSave(){

    // se vinher dados update se não create
    const operation: Promise<void> =
      (!this.data)
        ? this.produtoService.create(this.novoProduto)
        : this.produtoService.update(this.novoProduto);

  //  this.produtoService.create(this.novoProduto)
    operation  
      .then(() => {
        this.dialogRef.close();
      })
  }
}
