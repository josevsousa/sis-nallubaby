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
    
    let html = "<table>";
    html += `<thead> 
      <tr>  
        <th>cod</th> 
      </tr>
    </thead>`;

    listaProdutos.forEach(item => {
      html += `<tbody><tr>
            <td>${item.cod}</td>
        </tr></tbody>`
    });

    html += "</table>";
    console.log(html);
    return html
  }
}
