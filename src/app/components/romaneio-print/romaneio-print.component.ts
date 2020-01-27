import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/models/cadastro.model';
import { Pedido } from 'src/app/models/pedido.models';

@Component({
  selector: 'app-romaneio-print',
  templateUrl: './romaneio-print.component.html',
  styleUrls: ['./romaneio-print.component.css']
})
export class RomaneioPrintComponent implements OnInit {

  cliente: Cadastro;
  itens: any;
  constructor() { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('objClient'));
    this.itens = JSON.parse(localStorage.getItem('listaProdutos'));
    console.log(this.itens);
    console.log(this.cliente);
  }

  print(){
    window.print();
  }

}
