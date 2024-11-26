import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/usuarios/login', loginData);
  }


  // Novo método para obter o usuário por login
    obterUsuarioPorLogin(login: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${login}`);
    }
}
