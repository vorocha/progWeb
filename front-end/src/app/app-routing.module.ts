import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';


const routes: Routes = [
  {
    path: 'fornecedor', // NO angular não se usa a barra no começo da rota
    component: FornecedorListComponent
  },
  {
    path: 'fornecedor/novo', // caminho para cadastrar novo fornecedor
    component: FornecedorFormComponent
  },
  {
    path: 'fornecedor/:id', // Editar um fornecedor já existente
    component: FornecedorFormComponent
  },
  {
    path: 'venda', // NO angular não se usa a barra no começo da rota
    component: VendaListComponent
  },
  {
    path: 'venda/novo', // caminho para cadastrar nova venda
    component: VendaFormComponent
  },
  {
    path: 'venda/:id', // Editar uma venda já existente
    component: VendaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
