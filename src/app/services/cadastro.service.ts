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
  ) { 
    this.setCadastro(); 
  }

    // iniciando tipo o OnInit dos components nesse caso carregando o objeto produtos  
    private setCadastro(): void {
      this.cadastros = this.db.collection<Cadastro>('/clienteColaborador',
        (ref: CollectionReference) => ref.orderBy('nome', 'asc')
      );
    }

  create(cadastro: Cadastro): Promise<void> {
    console.log(cadastro);
    const uid = this.db.createId();
    return this.cadastros.doc<Cadastro>(uid)
      .set({
        uid,
        categoria: cadastro.categoria,
        nome: (cadastro.nome).toLocaleLowerCase(),
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

  gett(uid: string){
    console.log(uid)
  }

  codigoVenda(){
    var data = new Date();
    var dia     = data.getDate();           // 1-31
    var mes     = data.getMonth();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    
    var codigoExistente = localStorage.getItem("codigo");
    if (codigoExistente != null) {
      console.log("EXISTE");
      return codigoExistente;
    }else{
      console.log("NAO EXSITE");
      var newCodigo = data.getFullYear() + ":" + (data.getMonth()+1)  + ":" + data.getDate()  + ":" + data.getHours()  + ":"  + data.getMinutes()  + ":"  + data.getSeconds();
      localStorage.setItem("codigo", newCodigo);
      return newCodigo;
    }
    
  }

}
