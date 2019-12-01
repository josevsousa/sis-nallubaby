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

  nomeBotaoEnvio: string = 'Finalizar Pedido';
  nomeBotaoDeletar: string = 'Excluir Pedido';
  createPedido: boolean = true;

  codigo: string;

  pedido: Pedido = {
    codigo: '',
    cliente: '',
    representante: '',
    desconto: null,
    tipoPagamento: '',
    listaProdutos: '',
    dataCreate: null
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
    };
    if(localStorage.getItem('uid')){
      this.nomeBotaoEnvio = "Atualizar Pedido";
      this.nomeBotaoDeletar = "Não Alterar";
      this.createPedido = false;
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
    let msg = "Tem certeza que deseja esquecer esse pedido?";
    let voltar = "/inicio";
    if(!this.createPedido){
       msg = "Nenhuma alteração será feita nesse pedido ok!";
       voltar = "/historico";
    }

    if(confirm(msg)){
      localStorage.clear();
      this.router.navigate([voltar]);
    }
  }

  finalizarPedido(){

    if(this.validandoBotaoEnviar()){
        this.pedido = {
          codigo: localStorage.getItem('codigo'),
          cliente: localStorage.getItem('cliente'),
          representante: localStorage.getItem('representante'),
          desconto: localStorage.getItem('desconto'),
          tipoPagamento: localStorage.getItem('tipoPagamento'),
          listaProdutos: this.listaProdutos,
          dataCreate: new Date()
        };
        if(this.createPedido){
            console.log("criar pedido");
            //enviar ao firebase
            this.pedidosService.create(this.pedido)
              .then(()=>{
                localStorage.clear();
                this.router.navigate(['/historico']);
            });
        }else{
           this.pedido.uid = localStorage.getItem('uid');
           this.pedido.listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
          // updates no firestore
          this.pedidosService.update(this.pedido)
            .then(()=>{
              console.log("foi alterado?");
              localStorage.clear();
              this.router.navigate(['/historico']);
            })
            .catch((error)=>{
              console.log("tipo de erro : " + error)
            }) 
        } 
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
