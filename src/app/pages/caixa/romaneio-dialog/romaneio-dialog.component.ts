import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Pedido } from 'src/app/models/pedido.models';
import { Cadastro } from "../../../models/cadastro.model";
import { CadastroService } from "../../../services/cadastro.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-romaneio-dialog',
  templateUrl: './romaneio-dialog.component.html',
  styleUrls: ['./romaneio-dialog.component.css']
})
export class RomaneioDialogComponent implements OnInit {

  pedido: Pedido;
  cliente: Cadastro;
  


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RomaneioDialogComponent>,
    private cadastroService: CadastroService
  ) {}

  ngOnInit() { 
    this.pedido = this.data.pedido;
    this.cadastroService.get(this.pedido.cliente)
      .subscribe(
        (resp)=> {
          this.cliente = resp;
        });
  }

  
  close(){
    this.dialogRef.close();
  }

}
