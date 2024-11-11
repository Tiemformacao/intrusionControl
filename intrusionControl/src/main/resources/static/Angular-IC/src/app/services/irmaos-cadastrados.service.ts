import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface IrmaoDTO {
  nomeIrmao: string;
  whatsapp: string;
  idAparelho: string;
}

@Injectable({
  providedIn: 'root'
})
export class IrmaoService {

  private apiUrl = 'http://localhost:8080/aparelho/irmaos';

  constructor(private http: HttpClient) {}

  // Método para buscar todos os irmãos
  getIrmaos(): Observable<IrmaoDTO[]> {
    return this.http.get<IrmaoDTO[]>(this.apiUrl);
  }
}