import { Component, OnInit, EventEmitter, Output, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
import { Promise } from 'q';

import {FormControl} from '@angular/forms';

import { CadastroService } from "../../../services/cadastro.service";
import { ProdutosService } from "../../../services/produtos.service";

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { PedidoService } from "../../../services/pedido.service";

@Component({
  selector: 'app-caixa-cadastro',
  templateUrl: './caixa-cadastro.component.html',
  styleUrls: ['./caixa-cadastro.component.css']
})
export class CaixaCadastroComponent implements OnInit {

  selectCliente: string;
  selectRepresentante: string;
  item: any[] = [];

  myControl = new FormControl();

  @Output() adicionado: EventEmitter<any> = new EventEmitter();

  formulario: FormGroup;
  valorUnidade: number = 0;
  valorQtd: number = 0;
  valorTotal: number = 0;
  nomeProduto: String;

  enviado: boolean = false;

  cadastro$: Observable<any[]>;
  produtos$: Observable<any[]>;

  constructor(
    private formBuild: FormBuilder,
    private pedidoService: PedidoService,
    private cadastroService: CadastroService,
    private produtosService: ProdutosService,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
        // verificar o storage
        this.selectRepresentante = localStorage.getItem('representante');
        this.selectCliente = localStorage.getItem('cliente');

        // lista do cadastro de cliente e representantes
        this.cadastro$ = this.cadastroService.cadastros.valueChanges();
        this.produtos$ = this.produtosService.produtos.valueChanges();

        this.formulario = this.formBuild.group({
          cod: [null, [Validators.required, Validators.minLength(1)]],
          qtd: [null, [Validators.required, Validators.minLength(1)]],
          prod: [null, Validators.required],
          valor: [null],
        });
  }

  onSelectRepresentante(){
    // setTimeout(() => {
    //   this.renderer.selectRootElement('#inputProd').focus();
    // }, 1000);
    localStorage.setItem('representante', this.selectRepresentante );
  }
  onSelectCliente(): void{
    console.log("ok");
    localStorage.setItem('cliente', this.selectCliente );
  }

  ngSubmit(){
    this.mutiplicarTotal(false);
    // add no storage
    this.pedidoService.setProduto(this.formulario.value);
    this.formulario.reset();
    this.renderer.selectRootElement("#inputCod").focus();
    this.adicionado.emit(null);
  }

  codigoEvent(e){

    let val = e.target.value;
    //buscando o nome do produto pelo codigo
    this.produtosService.produtos.valueChanges().forEach((item)=>{
      let resp = item.filter((i)=>{
         return i.codigo === parseInt(val);
      });
      if(resp.length > 0){
        //cod não esta vazio
        if((val != "")&&(val > 0)){
          // passa o valor para valorUnidade
          this.valorUnidade = (resp[0].valor);
          this.nomeProduto = (resp[0].nome);
          this.mutiplicarTotal(true);
          // passar o cod e o pro para o formulario
          this.formulario.setValue({cod:val, qtd:null, prod: resp[0].nome, valor: resp[0].valor});
          this.renderer.selectRootElement('#inputQtd').focus();
        }
      }else{
        this.formulario.reset();
        this.mutiplicarTotal(false);
        this.renderer.selectRootElement("#inputCod").focus();      
      }

    }); 
  }

  onQtd(e): void{
    let valor = e.target.value;
    
    if (valor) {
      this.valorQtd = valor;
    }else{
      this.valorQtd = 0;
    };
    this.mutiplicarTotal(true);
      
  }

  mutiplicarTotal(status): void{
    if(status){
      this.valorTotal = this.valorQtd * this.valorUnidade;
    }else{
      this.valorTotal = 0;
      this.valorQtd = 0;
      this.valorUnidade = 0;
      this.nomeProduto = "";
    }
  }

}
