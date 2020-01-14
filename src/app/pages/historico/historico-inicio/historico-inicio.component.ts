import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { Pedido } from "../../../models/pedido.models";
import { take } from "rxjs/operators";

// import { HistoricoService } from "../../../services/historico.service";
import { PedidosService } from "../../../services/pedidos.service";

@Component({
  selector: 'app-historico-inicio',
  templateUrl: './historico-inicio.component.html',
  styleUrls: ['./historico-inicio.component.css']
})
export class HistoricoInicioComponent implements OnInit {

  pedidos$: Observable<Pedido[]>;
  loading = true;

  ano: string;
  mes: string;

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
    private pedidosService: PedidosService,
    private location: Location,
    private router: Router
  ) {

    // pegar nosso mes e ano atual
    const dataAtual = new Date();
    this.ano = (dataAtual.getFullYear()).toString();
    this.mes = ("0000" + (dataAtual.getMonth()+1)).slice(-2);
    console.log(this.ano)
   }

  ngOnInit() {
    // buscando Historico
    this.pedidos$ = this.pedidosService.pedidos.valueChanges();
    this.pedidos$
      .pipe(take(2))
      .subscribe( (resp)=> {
        this.loading = false 
      }); 
    
  }


  deletePedido(pedido){
    if(confirm("Tem certeza que deseja deletar esse pedido?")){
      this.pedidosService.delete(pedido);
    }
  }
  
  updatePedido(pedidoUp){
    //enviar esse pedido no localStorage
      localStorage.setItem('codigo', pedidoUp.codigo);
      localStorage.setItem('cliente', pedidoUp.cliente);
      localStorage.setItem('representante', pedidoUp.representante);
      localStorage.setItem('desconto', pedidoUp.desconto);
      localStorage.setItem('tipoPagamento', pedidoUp.tipoPagamento);
      localStorage.setItem('listaProdutos', JSON.stringify(pedidoUp.listaProdutos));
      localStorage.setItem('uid', pedidoUp.uid);
      this.router.navigate(['/caixa']);
  }


  backPage(){
    this.location.back();
  }


}
