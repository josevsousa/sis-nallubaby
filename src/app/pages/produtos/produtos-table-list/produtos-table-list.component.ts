import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import { ProdutosService } from "../../../services/produtos.service";
import { take } from "rxjs/operators";
import { Produto } from "../../../models/produtos.model";

/// table -----------------------------------------------
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
/// fim table -------------------------------------------

// dialog -----------------------------------------------
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProdutoDialogComponent } from '../produto-dialog/produto-dialog.component';
// fim dialog --------------------------------------------

@Component({
  selector: 'app-produtos-table-list',
  templateUrl: './produtos-table-list.component.html',
  styleUrls: ['./produtos-table-list.component.css']
})
export class ProdutosTableListComponent implements OnInit, AfterViewInit {
  /// table ------------------------------
  displayedColumns: string[] = ['codigo', 'nome', 'valor', 'descricao', '#'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /// fim table ----------------------------

  panelOpenState = false; // dialog
  loading = true; 

  constructor(
    private produtosService: ProdutosService,
    private location: Location,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
        // buscando produtos
        this.produtosService.produtos.valueChanges()
        .pipe(take(2))
        .subscribe(resp=> {
          this.dataSource.data = resp, /// table --- 
          this.loading = false       
        });
  }

  ngAfterViewInit(){

    /// table --------------------------------
    this.dataSource.paginator = this.paginator;
  }


  backPage(){
    this.location.back();
  }


  showDialog(produto?: Produto){
    // config recebe produto para enviar para o Dialog
    const config: MatDialogConfig<any> = (produto)? {data: { produto }}: null ;
    this.dialog.open(ProdutoDialogComponent, config);
    this.atualizarTable(); // table -------
  }

  onDelete(produto: Produto): void {

    if(confirm("Tem certreza que deseja deletar?")){
      this.produtosService.delete(produto);
      this.atualizarTable(); // table -------
    }
  }

    /// table -----------------------------------
    atualizarTable(){
      this.produtosService.produtos.valueChanges()
        .subscribe(resp=> {
          this.dataSource.data = resp 
        });
    }
    /// fim table -------------------------------


}
