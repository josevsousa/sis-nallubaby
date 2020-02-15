import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pedido } from "../../../models/pedido.models";
import { Cadastro } from "../../../models/cadastro.model";

import { PedidoService } from "../../../services/pedido.service";
import { CadastroService } from "../../../services/cadastro.service";
import { PedidosService } from "../../../services/pedidos.service";
import { PrintService } from "../../../services/print.service";

import { ConnectionService } from 'ng-connection-service';

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
  cliente: Cadastro;

  nomeBotaoEnvio: string = 'Finalizar';
  nomeBotaoDeletar: string = 'delete';
  createPedido: boolean = true;

  codigo: string;

  isConnected: boolean = true;

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
    public connectionService: ConnectionService,
    private router: Router,
    private pedidoService: PedidoService,
    private cadastroService: CadastroService,
    private pedidosService: PedidosService,
    private printService: PrintService
  ) { 
    // ferifica conexão
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
    });
   }

  ngOnInit(){  
    this.ngInit();
  }

  ngInit(){
    this.codigo = this.cadastroService.codigoVenda();
    const tp = localStorage.getItem('tipoPagamento');
    if (tp) {
      this.tipoPagamento = tp;
    } else {
      this.tipoPagamento = "0";
      localStorage.setItem('tipoPagamento', "0");
    }

    console.log("inicilizando o caixaaaa: "+this.tipoPagamento);
    

    this.atualizar();
    if(localStorage.getItem('desconto')){
      this.desconto = parseFloat(localStorage.getItem('desconto'));
      this.valorTotalDesconto = (this.valorTotal - this.desconto);
    };
    if(localStorage.getItem('uid')){
      this.nomeBotaoEnvio = "Atualizar";
      this.nomeBotaoDeletar = "replay";
      this.createPedido = false;
    }
  }


  valorParcela(){
    return (this.valorTotalDesconto)/(parseInt(this.tipoPagamento));
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

  print() {
    if(this.validandoBotaoEnviar()){
  
      const idClient = localStorage.getItem('cliente');
      this.cadastroService.get(idClient)
      .subscribe(
        (resp)=> {
          // this.cliente = resp;
          localStorage.setItem('objClient', JSON.stringify(resp));
          this.router.navigate(['/print']);

        });   
    }   
  }

  finalizarPedido(){
    // console.log(this.validandoBotaoEnviar);
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
            // if(this.isConnected){

            // }else{

            // };
            // espera o registro no firebase
              this.pedidosService.create(this.pedido);
                // .then(()=>{
                  // localStorage.clear();
                  // this.router.navigate(['/historico']);
                // });      
              localStorage.clear();
              this.router.navigate(['/historico']);        
            // fim epera o registro no firebase
        }else{
           this.pedido.uid = localStorage.getItem('uid');
           this.pedido.listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
          // updates no firestore
          this.pedidosService.update(this.pedido);
            // .then(()=>{
            //   localStorage.clear();
            //   this.router.navigate(['/historico']);
            // })
            localStorage.clear();
            this.router.navigate(['/historico']);
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
