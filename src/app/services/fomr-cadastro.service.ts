import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FomrCadastroService {

  getProdutos(){
    let listaProdutos = localStorage.getItem('listaProdutos');
    if (listaProdutos != null) {
      return JSON.parse(localStorage.getItem('listaProdutos')); 
    }else{
      return [];
    }
  }

  setProduto(produto): void{
    if (localStorage.getItem('listaProdutos') != null) {
      this.addProduto(produto);
    }else{
      this.newProduto(produto);
    }
  }

  addProduto(produto){
    console.log("----------- adicionando um produto a lista ------------------------");
    console.log(produto);
    let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    listaProdutos.push(produto);
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos ));
    //   this.listaProdutos = null;
  }
  newProduto(produto){
    console.log("----------- criando uma lista com o novo produto ------------------------");
    console.log(produto);

    //   // criar lista
    localStorage.setItem('listaProdutos', ("["+JSON.stringify(produto)+"]"));   
    //   console.log("lista criada")
  }

  valorTotal(){
    let total = 0;
    let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    console.log(listaProdutos+"00000000000");
    listaProdutos.forEach((item)=>{
      total += (item.valor * item.qtd)
    });
    return total
  }
}
