import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irmao } from '../models/irmao.model';

@Injectable({
  providedIn: 'root'
})
export class IrmaoService {
  private apiUrl = 'http://localhost:8080/api/irmaos';

  constructor(private http: HttpClient) {}

  // Método para buscar todos os irmãos
  getIrmaos(): Observable<Irmao[]> {
    return this.http.get<Irmao[]>(this.apiUrl);
  }

  // Método para buscar um irmão por ID
  getIrmaoById(id: number): Observable<Irmao> {
    return this.http.get<Irmao>(`${this.apiUrl}/${id}`);
  }

  // Método para salvar um novo irmão
  saveIrmao(irmao: Irmao): Observable<Irmao> {
    return this.http.post<Irmao>(this.apiUrl, irmao);
  }

  // Método para atualizar um irmão existente
  updateIrmao(id: number, irmao: Irmao): Observable<Irmao> {
    return this.http.put<Irmao>(`${this.apiUrl}/${id}`, irmao);
  }

  // Método para deletar um irmão
  deleteIrmao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

