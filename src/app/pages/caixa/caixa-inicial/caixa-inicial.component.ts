import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PedidoService } from "../../../services/pedido.service";
import { CadastroService } from "../../../services/cadastro.service";

@Component({
  selector: 'app-caixa-inicial',
  templateUrl: './caixa-inicial.component.html',
  styleUrls: ['./caixa-inicial.component.css']
})
export class CaixaInicialComponent implements OnInit {

  listaProdutos: Array<any>;
  valorTotal: number;
  desconto: number = 0;
  valorTotalDesconto: number = 0;

  codigo: string;

  constructor(
    private router: Router,
    private pedidoService: PedidoService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(){  
    this.codigo = this.cadastroService.codigoVenda();
    this.atualizar();
    if(localStorage.getItem('desconto')){
      this.desconto = parseFloat(localStorage.getItem('desconto'));
      this.valorTotalDesconto = (this.valorTotal - this.desconto);
    }
  }

  atualizar(): void{
    // pega a lista e o valot total atual do localStorage
    this.listaProdutos = this.pedidoService.getProdutos();
    this.valorTotal = (this.pedidoService.valorTotal());
    this.valorTotalDesconto = (this.valorTotal - this.desconto);
  }

  addDesconto(val){
    localStorage.setItem('desconto', val);
    this.desconto = val;
    this.atualizar();
  }

  deletePedido(){
    if(confirm("Tem certeza que deseja deletar esse pedido?")){
      localStorage.clear();
      this.router.navigate(['/inicio']);
    }
  }

  finalizarPedido(){
    console.warn("enviar pedido para o firebase");
  }
  
  liZebra(i){
    if(i % 2 == 0){
        return {'listZebra': true}
    }else{
      return {'listZebra':false}
    }
  }

}
