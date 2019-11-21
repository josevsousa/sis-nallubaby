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

  addProduto(produto): void{
    console.log("----------- adicionando um produto a lista ------------------------");
    let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    listaProdutos.push(produto);
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos ));
    //   this.listaProdutos = null;
  }
  newProduto(produto): void{
    console.log("----------- criando uma lista com o novo produto ------------------------");
    // criar lista
    localStorage.setItem('listaProdutos', ("["+JSON.stringify(produto)+"]"));   
  }

  delProduto(index): void{
    console.log("Deletar esse item: " + index);
    
    return JSON.parse(localStorage.getItem('listaProdutos')); 
  }

  valorTotal(){
    let total = 0;
    let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    listaProdutos.forEach((item)=>{
      total += (item.valor * item.qtd)
    });
    return total
  }
}
