import { Component, OnInit, Inject } from '@angular/core';
import { Cadastro } from '../../../models/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-dialog.component.html',
  styleUrls: ['./cadastro-dialog.component.css']
})
export class CadastroDialogComponent implements OnInit {
  
  dialogTitle = "Novo Cadastro";
  
  novoCadastro: Cadastro = {
    tipo: '',
    categoria: '',
    nome: '',
    celular: '',
    fixo: '',
    email: '',
    rg: '',
    cpf: '',
    cnpj: '',
    insc: '',
    cep: '',
    uf: '',
    bairro: '',
    cidade: '',
    logradouro: '',
    numero: '',
    registrado: ''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CadastroDialogComponent>,
    private cadastroService: CadastroService
    ) { }

    ngOnInit() {
      if(this.data){
        this.dialogTitle = 'Cadastro completo';
        this.novoCadastro = this.data.cadastro; 
      }
    }
  
    onSave(){
      // se vinher dados update se não create
      const operation: Promise<void> =
        (!this.data)
          ? this.cadastroService.create(this.novoCadastro)
          : this.cadastroService.update(this.novoCadastro);
  
      operation  
        .then(() => {
          this.dialogRef.close();
        })
    }
}
