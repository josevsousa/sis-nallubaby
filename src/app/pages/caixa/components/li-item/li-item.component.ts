import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { FomrCadastroService } from "../../../../services/fomr-cadastro.service";

// import { emit } from 'cluster';

@Component({
  selector: 'app-li-item',
  templateUrl: './li-item.component.html',
  styleUrls: ['./li-item.component.css']
})
export class LiItemComponent implements OnInit {

  @Output() deleteUpdate: EventEmitter<any> = new EventEmitter();
  
  @Input() index: string;
  @Input() item: Object;
  
  total: number;

  constructor(
    private formCadastroService: FomrCadastroService
  ) { }

  ngOnInit(){
    this.total = (this.item['qtd'] * this.item['valor'] );
  }

  ngDelete(){
    console.log(this.index);
    //deletar item da lista
    this.formCadastroService.delProduto(this.index);
    // atualizar o localStorage da view do Component Pai
    this.deleteUpdate.emit();
  }

  newQtd(valorQtd){
    // atualizar total item
    this.total = (valorQtd * this.item['valor'] );

    // atualziar nova qtd no localStorage
    this.formCadastroService.updateProduto(this.index, valorQtd);

    // atualizar fullTotal
    this.deleteUpdate.emit();

  }

}