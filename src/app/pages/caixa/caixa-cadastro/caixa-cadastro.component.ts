import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
import { Promise } from 'q';

import {FormControl} from '@angular/forms';

import { CadastroService } from "../../../services/cadastro.service";

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { FomrCadastroService } from "../../../services/fomr-cadastro.service";

@Component({
  selector: 'app-caixa-cadastro',
  templateUrl: './caixa-cadastro.component.html',
  styleUrls: ['./caixa-cadastro.component.css']
})
export class CaixaCadastroComponent implements OnInit {

  selectCliente: string;
  selectRepresentante: string;

  myControl = new FormControl();

  @Output() adicionado: EventEmitter<any> = new EventEmitter();

  formulario: FormGroup;
  valorUnidade: number = 0;
  valorQtd: number = 0;
  valorTotal: number = 0;

  enviado: boolean = false;

  cadastro$: Observable<any[]>;

  constructor(
    private formBuild: FormBuilder,
    private formCadastroService: FomrCadastroService,
    private cadastroService: CadastroService,
  ) { }

  ngOnInit() {
        // verificar o storage
        this.selectRepresentante = localStorage.getItem('representante');
        this.selectCliente = localStorage.getItem('cliente');

        // lista do cadastro de cliente e representantes
        this.cadastro$ = this.cadastroService.cadastros.valueChanges();

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
    // this.mutiplicarTotal(false);
    // add no storage
    this.formCadastroService.setProduto(this.formulario.value);
    this.formulario.reset();
    // this.renderer.selectRootElement("#inputCod").focus();
    this.adicionado.emit(null);
  }

}
