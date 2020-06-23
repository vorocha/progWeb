import { MatSnackBar } from '@angular/material/snack-bar';
import { VendaService } from './../venda.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../cliente/cliente.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.scss']
})
export class VendaFormComponent implements OnInit {

  title: string = 'Nova Venda'

  venda: any = {}

  //Entidades relacionadas

  clientes : any = [] //Vetor Vazio

  constructor(
    private vendaSrv : VendaService,
    private clienteSrv : ClienteService,
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
        this.venda = await this.vendaSrv.obterUm(params['id'])
        this.title = 'Atualizando Venda'
      }
      catch(erro){
        this.snakBar.open(erro.message, 'Que Pena!', {duration: 5000})
      }
    }

    //Entidades Relacionadas
    try{
      this.clientes = await this.clienteSrv.listar()
    }
    catch(erro){
      this.snakBar.open(erro.message, 'Que Pena!', {duration: 5000})
    }
  }

  voltar(x){

  }
  async salvar(form: NgForm){
    if(form.valid){
      try{
        let msg = 'Venda Atualizado com Sucesso'
        // SE existir campo _id é atualização
        if(this.venda._id){
          await this.vendaSrv.atualizar(this.venda)
        }
        // Caso de criar um novo
        else{
          await this.vendaSrv.novo(this.venda)
          msg = 'Venda criado com sucesso.'
        }

        this.snakBar.open(msg, 'Entendi', {duration: 5000})

        this.router.navigate(['/venda'])
      }
      catch(erro){
        this.snakBar.open(erro.message, 'Que Pena!', {duration: 5000})
      }
    }

  }
}
