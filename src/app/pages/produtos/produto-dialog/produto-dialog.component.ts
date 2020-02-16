import { Component, OnInit, Inject } from '@angular/core';
import { Produto } from '../../../models/produtos.model';
import { ProdutosService } from '../../../services/produtos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.css']
})
export class ProdutoDialogComponent implements OnInit {

  dialogTitle = "Novo Produto";

  form_produtos: FormGroup;

  atualizarProduto = false;
  
  constructor(
    //injetando dados no dialog
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProdutoDialogComponent>,
    private fb: FormBuilder,
    private produtoService: ProdutosService
  ) {}

  //ver se esta vindo algum produto
  ngOnInit() {
    this.form_produtos = this.fb.group({
      codigo: [ 
        null, 
        Validators.compose([
          Validators.required])],
      nome: ['', Validators.required],
      valor: [null, Validators.compose([ Validators.required, Validators.min(10) ])],
      descricao: [''],
    });
    // se vinher dados no data do dialog
    if(this.data){
      this.dialogTitle = 'Registros do produto';
      this.atualizarProduto = true;
      // add o data.produto ao form
      this.form_produtos = this.fb.group({
        codigo: [{ value: this.data.produto.codigo, disabled: true } ,Validators.compose([
          Validators.required ])],
        nome: [this.data.produto.nome, Validators.required],
        valor: [this.data.produto.valor, Validators.required],
        descricao: [this.data.produto.descricao],
        uid: [ this.data.produto.uid ] // se vinher um objeto é preciso repassar o uid dele para poder fazer upgrade e delete
      });
    }else{
      this.maiorCodigo();
    };
  }//ngOnInit

  maiorCodigo() {
    this.produtoService.produtos.valueChanges().forEach(i => {
      let maiorCod = 0;
      i.forEach((j)=>{
         if(j.codigo > maiorCod){
           maiorCod = j.codigo;
         }
      });
      this.form_produtos.controls.codigo.setValue(maiorCod+1);
    });
  }
 
  onSave() {
    // se vinher dados update se não create
    const operation: Promise<void> =
      (!this.data)
        ? this.produtoService.create(this.form_produtos.value)
        : this.produtoService.update(this.form_produtos.value);

  //  this.produtoService.create(this.novoProduto)
    operation  
      .then(() => {
        this.dialogRef.close();
      })
  }
}
