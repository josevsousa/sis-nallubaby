import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from 'angularfire2/firestore';
import { Produto } from '../models/produtos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  // tabela de produtos do firebase
  produtos: AngularFirestoreCollection<Produto>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setProdutos();
  }

    // iniciando tipo o OnInit dos components nesse caso carregando o objeto produtos  
    private setProdutos(): void{
      this.produtos = this.db.collection<Produto>('/produtos', 
        (ref: CollectionReference) => ref.orderBy('nome', 'asc')
      );    
    }

    create(produto: Produto): Promise<void>{
      const uid = this.db.createId();
      return this.produtos.doc<Produto>(uid)
        .set({
          uid, 
          codigo: produto.codigo,
          nome: (produto.nome).toLocaleLowerCase(),
          valor: produto.valor,
          descricao: (produto.descricao).toLocaleLowerCase()
        });
    }
  
    update(produto: Produto): Promise<void>{
      return this.produtos.doc<Produto>(produto.uid)
        .update(produto)
    }
  
    delete(produto: Produto): Promise<void>{
      return this.produtos.doc<Produto>(produto.uid)
        .delete();
    }
  
    get(uid: string): Observable<Produto>{
      return this.produtos.doc<Produto>(uid).valueChanges();
    }

}







