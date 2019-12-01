import { Injectable } from '@angular/core';
import { Pedido } from "../models/pedido.models";
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { query } from '@angular/animations';
import { isString } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: AngularFirestoreCollection<Pedido>;

  constructor(
    private db: AngularFirestore
  ) { 
    this.setPedidos();
  }


  private setPedidos(): void{
    this.pedidos = this.db.collection<Pedido>('/pedidos',
      (ref: CollectionReference) => ref.orderBy('dataCreate','desc')
    );
  }

  create(pedido: Pedido): Promise<void>{
    const uid = this.db.createId();
    return this.pedidos.doc<Pedido>(uid)
      .set({
        uid,
        codigo: pedido.codigo,
        cliente: pedido.cliente,
        desconto: pedido.desconto,
        representante: pedido.representante,
        tipoPagamento: pedido.tipoPagamento,
        listaProdutos: pedido.listaProdutos,
        dataCreate: pedido.dataCreate
      });
  }

  delete(pedido: Pedido): Promise<void>{
    return this.pedidos.doc<Pedido>(pedido.uid)
      .delete();
  }

  update(pedido: Pedido): Promise<void>{
    return this.pedidos.doc<Pedido>(pedido.uid)
      .update(pedido);
  }

  get(uid: string): Observable<Pedido>{
    return this.pedidos.doc<Pedido>(uid).valueChanges();
  }

}
