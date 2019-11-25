import { Component, OnInit } from '@angular/core';

import { FomrCadastroService } from "../../../services/fomr-cadastro.service";
import { CadastroService } from "../../../services/cadastro.service";

@Component({
  selector: 'app-caixa-inicial',
  templateUrl: './caixa-inicial.component.html',
  styleUrls: ['./caixa-inicial.component.css']
})
export class CaixaInicialComponent implements OnInit {

  listaProdutos: Array<any>;
  valorTotal: number;

  codigo: string;

  constructor(
    private formCadastroService: FomrCadastroService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(){
    this.atualizar();
    this.codigo = this.cadastroService.codigoVenda();
  }

  atualizar(): void{
    // pega a lista e o valot total atual do localStorage
    this.listaProdutos = this.formCadastroService.getProdutos();
    this.valorTotal = this.formCadastroService.valorTotal();
  }

  liZebra(i){
    if(i % 2 == 0){
        return {'listZebra': true}
    }else{
      return {'listZebra':false}
    }
  }


}
