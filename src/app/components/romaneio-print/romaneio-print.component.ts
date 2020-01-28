import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/models/cadastro.model';
import { Pedido } from 'src/app/models/pedido.models';
import { Location } from "@angular/common";

@Component({
  selector: 'app-romaneio-print',
  templateUrl: './romaneio-print.component.html',
  styleUrls: ['./romaneio-print.component.css']
})
export class RomaneioPrintComponent implements OnInit {

  cliente: Cadastro;

  itens: any;
  total: number;
  desconto: number = 0;
  tipoPagamento: number;

  codigo: String;
  representante: String;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('objClient'));
    this.itens = JSON.parse(localStorage.getItem('listaProdutos'));
    this.codigo = localStorage.getItem('codigo');
    this.representante = localStorage.getItem('representante');
    const desconto$ = parseFloat(localStorage.getItem('desconto'));
    if(desconto$){
      this.desconto = desconto$
    }else{
      this.desconto = 0;
    }
    this.tipoPagamento = parseInt(localStorage.getItem('tipoPagamento'));
    console.log(this.cliente);
    console.log(this.tipoPagamento);
    this.ngTotal();
  }

  // calcular o total
  ngTotal(){
    let totalTemp = 0;
    this.itens.forEach(item => {
      totalTemp += (item.valor * item.qtd);  
    });
    this.total = totalTemp;
  }

  print(){
    window.print();
  }

  backPage(){
    this.location.back();
  }


}
