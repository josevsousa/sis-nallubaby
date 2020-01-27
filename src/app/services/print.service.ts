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
    
    let html = `<style>
      table { width: 100%; border-collapse: collapse; }
      th, td { border:1px solid  black; padding: 4px; }
      img, div { float: left; !important}
      div { width: 20% }
      
    </style>`;


    // cabeçalho
    html += `
      <img src="/assets/logo.png" />
      <div>
        <h3>Nallubaby</h3>nallu.paiva@gmail.com<br>
        Fernandes Vieira, 234 José Pinheiro Campina Grande PB 
      </div>
    `;  
    // fim do cabeçalho
    
    // lista de itens
    
      let htmlItens = "<table>";
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
