import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faccao } from '../models/faccao.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FaccaoService {
  private apiUrl = environment.SERVIDOR+'/api/faccoes';

  constructor(private http: HttpClient) {}

  // Método para buscar todas as facções
  getFaccoes(): Observable<Faccao[]> {
    return this.http.get<Faccao[]>(this.apiUrl);
  }

  // Método para buscar uma facção por ID
  getFaccaoById(id: number): Observable<Faccao> {
    return this.http.get<Faccao>(`${this.apiUrl}/${id}`);
  }

  // Método para salvar uma nova facção
  saveFaccao(faccao: Faccao): Observable<Faccao> {
    return this.http.post<Faccao>(this.apiUrl, faccao);
  }

  // Método para atualizar uma facção existente
  updateFaccao(id: number, faccao: Faccao): Observable<Faccao> {
    return this.http.put<Faccao>(`${this.apiUrl}/${id}`, faccao);
  }

  // Método para deletar uma facção
  deleteFaccao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
