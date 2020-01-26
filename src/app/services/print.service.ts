import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';
import { CadastroService } from "./cadastro.service";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  cliente: Cadastro;

  constructor(
    private cadastroService: CadastroService
  ) { }

  getCliente(pedido){
    this.cadastroService.get(pedido)
    .subscribe(
      (resp)=> {
        this.cliente = resp;
      });
  }

  getPrint(pedido){
    console.log(pedido);
    //   this.getCliente(pedido);
    //   this.cadastroService.get(pedido)
    //   .subscribe(
    //     (resp)=> {
    //       console.log(resp);
    //     });
    // console.log(this.cliente);
    return "<h1>Ol Imprimindo!!!</h1>"
  }
}
