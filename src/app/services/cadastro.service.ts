import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Cadastro } from "../models/cadastro.model";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cadastros: AngularFirestoreCollection<Cadastro>;

  constructor(
    private db: AngularFirestore
  ) { this.setCadastro(); }

    // iniciando tipo o OnInit dos components nesse caso carregando o objeto produtos  
    private setCadastro(): void {
      this.cadastros = this.db.collection<Cadastro>('/clienteColaborador',
        (ref: CollectionReference) => ref.orderBy('nome', 'asc')
      );
    }


  create(cadastro: Cadastro): Promise<void> {
    const uid = this.db.createId();
    return this.cadastros.doc<Cadastro>(uid)
      .set({
        uid,
        categoria: cadastro.categoria,
        tipo: cadastro.tipo,
        nome: cadastro.nome,
        celular: cadastro.celular,
        fixo: cadastro.fixo,
        email: cadastro.email,
        rg: cadastro.rg,
        cpf: cadastro.cpf,
        cnpj: cadastro.cnpj,
        insc: cadastro.insc,
        cep: cadastro.cep,
        uf: cadastro.uf,
        bairro: cadastro.bairro,
        cidade: cadastro.cidade,
        logradouro: cadastro.logradouro,
        numero: cadastro.numero,
        registrado: String(new Date())
      });
  }

  update(cadastro: Cadastro): Promise<void> {
    return this.cadastros.doc<Cadastro>(cadastro.uid)
      .update(cadastro)
  }


  delete(cadastro: Cadastro): Promise<void>{
    return this.cadastros.doc<Cadastro>(cadastro.uid)
      .delete();
  }

  get(uid: string): Observable<Cadastro>{
    return this.cadastros.doc<Cadastro>(uid).valueChanges();
  }

}
