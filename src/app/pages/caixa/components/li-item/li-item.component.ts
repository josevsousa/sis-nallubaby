import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { FomrCadastroService } from "../../../../services/fomr-cadastro.service";

// import { emit } from 'cluster';

@Component({
  selector: 'app-li-item',
  templateUrl: './li-item.component.html',
  styleUrls: ['./li-item.component.css']
})
export class LiItemComponent implements OnInit {

  @Output() deletado: EventEmitter<any> = new EventEmitter();

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
    //deletar item da lista
    this.formCadastroService.delProduto(this.index);
    // atualizar o localStorage da view do Component Pai
    this.deletado.emit();
  }

  newQtd(e){
    // atualizar total
    this.total = (e * this.item['valor'] );

    //gravar novos dados no storage
    
  }

}
