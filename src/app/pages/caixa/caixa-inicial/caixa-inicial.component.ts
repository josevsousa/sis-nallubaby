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

  atualizar(){
    console.log("alualização chamada!");
    this.listaProdutos = this.formCadastroService.getProdutos();
    this.valorTotal = this.formCadastroService.valorTotal();
  }


}
