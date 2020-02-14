import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Cadastro } from '../../../models/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { CadastroDialogComponent } from '../cadastro-dialog/cadastro-dialog.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cadastro$: Observable<Cadastro[]>  // $ pra indicar que é um observable
  loading = true;

  constructor(
      private location: Location,
      private dialog: MatDialog,
      private cadastroService: CadastroService
    ) { }

 // função para atualiar dados no firebase
 atualizarItems(){
  this.cadastroService.cadastros.valueChanges().forEach(item => {
        item.map((i)=>{
          // this.produtosService.update(i);
          // if(i.categoria != ''){
            this.cadastroService.update({
              uid: i.uid,
              tipo: i.tipo,
              categoria: 'cliente',  // cliente, colaborador
              nome: i.nome,
              celular: i.celular,
              fixo: i.fixo,
              email: i.email,
              rg: i.rg,
              cpf: i.cpf,
              cnpj: i.cnpj,
              insc: i.insc,
              cep: i.cep,
              uf: i.uf,
              bairro: i.bairro, 
              cidade: i.cidade,
              logradouro: i.logradouro,
              numero: i.numero,
              registrado: i.registrado 
            });
          // }
        })   
  });
}


    
  ngOnInit(): void {

    this.cadastro$ = this.cadastroService.cadastros.valueChanges();
    // this.cadastroClienteColaborador$ = this.clienteColaboradorService.cadastroClienteColaboradores.valueChanges();
 
    // delegar carregamento do cadastro para o loading no spinner
    this.cadastro$
      .pipe(take(2))
      .subscribe( () => this.loading = false )

  }


  backPage(){
    this.location.back();
  }

  showDialog(cadastro?: Cadastro){

    // console.log(cadastro)
    // config recebe produto para enviar para o Dialog
    const config: MatDialogConfig<any> = (cadastro)? {data: { cadastro }}: null ;
    this.dialog.open(CadastroDialogComponent, config);  
  }

  onDelete(cadastro: Cadastro): void {
    // console.log('ddd');
    if(confirm("Tem serza que deseja Deletar?")){
      this.cadastroService.delete(cadastro);
    } 
  }

}
