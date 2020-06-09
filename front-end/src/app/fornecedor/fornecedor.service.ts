import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  // injeção de dependência: em vez de criarmos manualmente
  // as dependências necessárias, o próprio Angular
  // as cria e  INJETA o objeto já instanciado
  // como  parâmetro do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/fornecedor').toPromise()
  }
}
