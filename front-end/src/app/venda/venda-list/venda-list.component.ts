import { ConfirmDlgComponent } from './../../ui/confirm-dlg/confirm-dlg.component';
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.scss']
})
export class VendaListComponent implements OnInit {

  vendas : any = [] // vetor vazio

  displayedColumns : string[] = ['num_venda', 'cliente', 'data_venda', 'forma_pagamento','data_pagamento', 'editar','excluir']

  constructor(
    private vendaSrv : VendaService,
    private snackBar : MatSnackBar,
    private dialog :MatDialog
    ){ }

  async ngOnInit() {
    this.vendas = await this.vendaSrv.listar()
    console.log(this.vendas)
  }

  async excluirItem(id: string){
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width:'50%',
      data: { question: ' Deseja realmente excluir este item?'}
    })
    let result = await dialogRef.afterClosed().toPromise();
    if(result){
      try{
        await this.vendaSrv.excluir(id)
        this.ngOnInit() // para atualizar os dados da tabela

        //alert('Exclusão efetuada com sucesso.')
        this.snackBar.open('Exclusão efetuada com sucesso.', 'Entendi', 
        {duration: 5000 });
      }
      catch(erro){
        //alert('ERRO: Não foi possível excluir este item')
        this.snackBar.open('ERRO: Não foi possível excluir este item', 'Tentar Novamente', 
        {duration: 5000 });
      }
    }
  }
}
