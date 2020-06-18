import { MatSnackBar } from '@angular/material/snack-bar';
import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent implements OnInit {

  title: string = 'Novo Fornecedor'

  fornecedor: any = {}

  constructor(
    private fornecedorSrv : FornecedorService,
    private snakBar: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    //capturando os parametros da rota
    let params = this.actRoute.snapshot.params

    //Existe algum parametro chamado id
    if(params['id']){
      //usa-se obterUm
      try{
        this.fornecedor = await this.fornecedorSrv.obterUm(params['id'])
        this.title = 'Atualizando Fornecedor'
      }
      catch(erro){
        this.snakBar.open(erro.message, 'Que Pena!', {duration: 5000})
      }
    }
  }

  voltar(x){

  }
  async salvar(form: NgForm){
    if(form.valid){
      try{
        let msg = 'Fornecedor Atualizado com Sucesso'
        // SE existir campo _id é atualização
        if(this.fornecedor._id){
          await this.fornecedorSrv.atualizar(this.fornecedor)
        }
        // Caso de criar um novo
        else{
          await this.fornecedorSrv.novo(this.fornecedor)
          msg = 'Fornecedor criado com sucesso.'
        }

        this.snakBar.open(msg, 'Entendi', {duration: 5000})

        this.router.navigate(['/fornecedor'])
      }
      catch(erro){
        this.snakBar.open(erro.message, 'Que Pena!', {duration: 5000})
      }
    }

  }
}
