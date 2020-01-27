import { Injectable } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  cliente: Cadastro;

  constructor(
  ) { }

  
  telaPrint(cliente){
    const listaProdutos = (JSON.parse(localStorage.getItem('listaProdutos')));
    
    let html = "";
    
    // lista de itens
      let htmlItens = `<style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border:1px solid  black; padding: 4px; }
      </style>`;
    
      htmlItens += "<table>";
      htmlItens += `<thead> 
        <tr >  
          <th>cod</th> 
          <th>produto</th>
          <th>qtd</th>
          <th>valor</th>
          <th>total</th>
        </tr>
      </thead><tbody>`;

      listaProdutos.forEach(item => {
        htmlItens += `<tr>
              <td>${item.cod}</td>
              <td>${item.prod}</td>
              <td>${item.qtd}</td>
              <td>R$${(item.valor).toFixed(2)}</td>
              <td>R$${(item.valor * item.qtd).toFixed(2)}</td>
            </tr>`
      });
      htmlItens += "<tbody></table>";
      html += htmlItens;
    // fim do htmlItens
    return html
  }
}
