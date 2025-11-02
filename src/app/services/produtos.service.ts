import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../models/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = "http://localhost:3000/produtos"
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.apiUrl);
  }

  getProdutoById(id: number): Observable<ProdutoModel> {
    return this.http.get<ProdutoModel>(`${this.apiUrl}/${id}`);
  }


}
