import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


export interface IrmaoDTO {
  nomeIrmao: string;
  whatsapp: string;
  idAparelho: string;
}

@Injectable({
  providedIn: 'root'
})
export class IrmaoService {

  private apiUrl = environment.SERVIDOR+'/aparelho/irmaos';

  constructor(private http: HttpClient) {}

  // Método para buscar todos os irmãos
  getIrmaos(): Observable<IrmaoDTO[]> {
    return this.http.get<IrmaoDTO[]>(this.apiUrl);
  }
}