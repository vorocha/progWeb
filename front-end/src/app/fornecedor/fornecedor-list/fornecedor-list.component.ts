import { ConfirmDlgComponent } from './../../ui/confirm-dlg/confirm-dlg.component';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.scss']
})
export class FornecedorListComponent implements OnInit {

  fornecedores : any = [] // vetor vazio

  displayedColumns : string[] = ['razao_social', 'nome_fantasia', 'telefone', 'email', 'editar','excluir']

  constructor(
    private fornecedorSrv : FornecedorService,
    private snackBar : MatSnackBar,
    private dialog :MatDialog
    ){ }

  async ngOnInit() {
    this.fornecedores = await this.fornecedorSrv.listar()
    console.log(this.fornecedores)
  }

  async excluirItem(id: string){
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width:'50%',
      data: { question: ' Deseja realmente excluir este item?'}
    })
    let result = await dialogRef.afterClosed().toPromise();
    if(result){
      try{
        await this.fornecedorSrv.excluir(id)
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
