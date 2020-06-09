import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';


const routes: Routes = [
  {
    path: 'fornecedor', // NO angular não se usa a barra no começo da rota
    component: FornecedorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
