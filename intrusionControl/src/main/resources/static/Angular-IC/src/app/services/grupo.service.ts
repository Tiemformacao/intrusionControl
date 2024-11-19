import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private apiUrl = 'http://localhost:8080/api/grupos';

  constructor(private http: HttpClient) {}

  // Método para salvar um novo grupo
  saveGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.apiUrl, grupo);
  }

  // Método para buscar todos os grupos
  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  // Método para buscar um grupo por ID
  getGrupoById(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um grupo existente
  updateGrupo(id: number, grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(`${this.apiUrl}/${id}`, grupo);
  }

  // Método para deletar um grupo
  deleteGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  // Método para marcar um grupo como removido
    marcarComoRemovido(id: number): Observable<Grupo> {
      return this.http.put<Grupo>(`${this.apiUrl}/${id}/remover`, {});
    }
	
	
	
	
	// Método para listar grupos de forma paginada
	  listarGruposPaginados(pagina: number, tamanho: number): Observable<any> {
	    return this.http.get<any>(`${this.apiUrl}/paginado?pagina=${pagina}&tamanho=${tamanho}`);
	  }
	
	// Busca grupos por facção com paginação
	buscarPorFaccao(faccaoId: number, pagina: number, tamanho: number): Observable<any> {
	  return this.http.get<any>(`${this.apiUrl}/faccao/${faccaoId}?pagina=${pagina}&tamanho=${tamanho}`);
	}

	// Busca grupos por irmão com paginação
	buscarPorIrmao(irmaoId: number, pagina: number, tamanho: number): Observable<any> {
	  return this.http.get<any>(`${this.apiUrl}/irmao/${irmaoId}?pagina=${pagina}&tamanho=${tamanho}`);
	}

}
