import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pedido } from "../../../models/pedido.models";

import { PedidoService } from "../../../services/pedido.service";
import { CadastroService } from "../../../services/cadastro.service";
import { PedidosService } from "../../../services/pedidos.service";

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
  tipoPagamento: string;

  codigo: string;

  pedido: Pedido = {
    codigo: '',
    cliente: '',
    representante: '',
    desconto: null,
    tipoPagamento: '',
    listaProdutos: ''
  };

  constructor(
    private router: Router,
    private pedidoService: PedidoService,
    private cadastroService: CadastroService,
    private pedidosService: PedidosService
  ) { }

  ngOnInit(){  
    this.codigo = this.cadastroService.codigoVenda();
    this.tipoPagamento = localStorage.getItem('tipoPagamento');
    this.atualizar();
    if(localStorage.getItem('desconto')){
      this.desconto = parseFloat(localStorage.getItem('desconto'));
      this.valorTotalDesconto = (this.valorTotal - this.desconto);
    }
  }

  onSelectTipoPagamento(){
    localStorage.setItem('tipoPagamento', this.tipoPagamento);
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
    if(this.validandoBotaoEnviar()){
        this.pedido = {
          codigo: localStorage.getItem('codigo'),
          cliente: localStorage.getItem('cliente'),
          representante: localStorage.getItem('representante'),
          desconto: parseFloat(localStorage.getItem('desconto')),
          tipoPagamento: localStorage.getItem('tipoPagamento'),
          listaProdutos: this.listaProdutos
        };

        //enviar ao firebase
        this.pedidosService.create(this.pedido)
          .then(()=>{
            localStorage.clear();
            this.router.navigate(['/inicio']);
        });
     }
  }
  
  liZebra(i){
    if(i % 2 == 0){
        return {'listZebra': true}
    }else{
      return {'listZebra':false}
    }
  }

  validandoBotaoEnviar(){ 
    let btEnviar = true
    let campos = [
      { nome: 'Tipo Pagamento', valor: localStorage.getItem('tipoPagamento')},
      { nome: 'Representante', valor: localStorage.getItem('representante')},
      { nome: 'Cliente', valor: localStorage.getItem('cliente')},
      { nome: 'Produtos na lista', valor: localStorage.getItem('listaProdutos')}
    ]
    let msg = "Campos obrigatorios : ";
    campos.forEach((item)=>{
      if(item.valor == null){
        btEnviar = false;
        msg += (`[ ${item.nome} ] `);

      }
    });

    if(!btEnviar){
      alert(msg);
    }else{
      btEnviar = true;
    }
    
    return btEnviar;
  }

}
