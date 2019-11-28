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
    //baixar lista para uma nova lista
    let newList = JSON.parse(localStorage.getItem('listaProdutos'));
    // deleta item da nova lista
    newList.splice(index, 1);
    
    localStorage.removeItem('listaProdutos');
    // adiciona a nova lista ao locaStorage
    localStorage.setItem('listaProdutos', JSON.stringify(newList));
  }

  updateProduto(index, newQtd){
    // baixar lista para uma nova lista
    let newList = JSON.parse(localStorage.getItem('listaProdutos'));
    // baixar item da newList
    let item = newList[index];
    // atualizado 
    item['qtd'] = parseInt(newQtd);
    // subistituir novo item na newList
    newList.splice(index, 1, item );
    // remove item do localStorage
    localStorage.removeItem('listaProdutos');
    // adiciona a nova lista ao locaStorage
    localStorage.setItem('listaProdutos', JSON.stringify(newList));
  }

  valorTotal(){
    let total = 0;
    let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    listaProdutos.forEach((item)=>{
      total += (item.valor * item.qtd)
    });

    // if(localStorage.getItem('desconto')){
    //   total -= parseFloat(localStorage.getItem('desconto'));
    // }

    return total
  }

}
