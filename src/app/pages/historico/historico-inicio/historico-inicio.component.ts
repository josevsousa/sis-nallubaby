import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
    private router: Router
  ) { }

  ngOnInit() {
    this.pedidos$ = this.pedidosService.pedidos.valueChanges();
    this.pedidos$
      .pipe(take(2))
      .subscribe( ()=> this.loading = false ); 
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

}
