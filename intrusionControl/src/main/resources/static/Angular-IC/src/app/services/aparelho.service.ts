import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AparelhoService {
	
  private apiUrl = 'http://localhost:8080/aparelho';

  constructor(private http: HttpClient) {}

  // Método para buscar todos os aparelhos
  getAparelhos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // NMétodo para atualizar um aparelho
    updateAparelho(id: string, aparelho: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, aparelho);
    }
	
}
