import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Cadastro } from '../../../models/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { CadastroDialogComponent } from '../cadastro-dialog/cadastro-dialog.component';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  cadastro$: Observable<Cadastro[]>  // $ pra indicar que é um observable
  loading = true;

  constructor(
    private location: Location,
    private dialog: MatDialog,
    private cadastroService: CadastroService
  ) { }

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
      console.log(cadastro);
      // this.cadastroService.delete(cadastro);
    } 
  }

}
