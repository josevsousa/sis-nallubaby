import { Component, OnInit, Inject } from '@angular/core';
import { Cadastro } from '../../../models/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Validacoes } from "../cadastro-form-validators/cadastro-form-validators";

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-dialog.component.html',
  styleUrls: ['./cadastro-dialog.component.css']
})
export class CadastroDialogComponent implements OnInit {
  

  dialogTitle = "Novo Cadastro";
  form_cadastros: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CadastroDialogComponent>,
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
    ) { }

    ngOnInit() {
      // inicia modelo do form cadastro
      this.form_cadastros = this.formBuilder.group({
        nome: [ null, Validators.compose([ Validators.required, Validators.minLength(3) ])],
        categoria: [ null, Validators.required ],
        celular:  [null, Validators.compose([ Validators.required, Validators.minLength(3) ])],
        fixo:  [null],
        email:  [null],
        rg:  [null],
        cpf:  ["", Validacoes.ValidaCpf ], // e "" poque nao e obrigatorio
        cnpj: [null],
        insc: [null],
        cep: [null],
        uf: [null],
        bairro: [null],
        cidade: [null],
        logradouro: [null],
        numero: [null],
        registrado: [null],
      });

      // se vinher um formulario preechido add os valores no form_cadastro
      if(this.data){
        console.log(this.data);
        this.form_cadastros = this.formBuilder.group({
          nome: [ this.data.cadastro.nome , Validators.compose([ Validators.required, Validators.minLength(3) ])],
          categoria: [ this.data.cadastro.categoria, Validators.required ],
          celular:  [ this.data.cadastro.celular, Validators.compose([ Validators.required, Validators.minLength(3) ])],
          fixo:  [this.data.cadastro.fixo],
          email:  [this.data.cadastro.email],
          rg:  [this.data.cadastro.rg],
          cpf:  [this.data.cadastro.cpf, Validacoes.ValidaCpf],
          cnpj: [this.data.cadastro.cnpj],
          insc: [this.data.cadastro.insc],
          cep: [this.data.cadastro.cep],
          uf: [this.data.cadastro.uf],
          bairro: [this.data.cadastro.bairro],
          cidade: [this.data.cadastro.cidade],
          logradouro: [this.data.cadastro.logradouro],
          numero: [this.data.cadastro.numero],
          registrado: [this.data.cadastro.registro],
          uid: [this.data.cadastro.uid]
        });     
      }
  
    } //onInit
  
    onSave(){
      // se vinher dados update se não create
      const operation: Promise<void> =
        (!this.data)
          ? this.cadastroService.create(this.form_cadastros.value)
          : this.cadastroService.update(this.form_cadastros.value);
      operation  
        .then(() => {
          this.dialogRef.close();
        })
        .catch((error)=>{
          console.log(error)
        })
    }
}
