import { Component, OnInit } from '@angular/core';

import { CadastroService } from "../../../services/cadastro.service";

@Component({
  selector: 'app-caixa-inicial',
  templateUrl: './caixa-inicial.component.html',
  styleUrls: ['./caixa-inicial.component.css']
})
export class CaixaInicialComponent implements OnInit {

  codigo: string;

  constructor(
    private cadastroService: CadastroService
  ) { }

  ngOnInit() {
    this.codigo = this.cadastroService.codigoVenda();
  }



}
