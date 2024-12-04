//import { HttpClient } from '@angular/common/http';
//import { Injectable, inject } from '@angular/core';
//import { Observable } from 'rxjs';
//import * as jwt_decode from 'jwt-decode'; 
//import { Login } from './login';
//import { Usuario } from './usuario';
//import { BehaviorSubject } from 'rxjs';
//
//interface JwtPayload {
//  sub?: string;
//  // Adicione outras propriedades se necessário
//}
//
//@Injectable({
//	providedIn: 'root'
//})
//export class LoginService {
//
//
//
//	http = inject(HttpClient);
//	API = "http://localhost:8080/api/login";
//	nomeUsuario: string | null = null;
//
//	// BehaviorSubject para manter o nome do usuário atualizado
//	private nomeUsuarioSubject = new BehaviorSubject<string | null>(null);
//	nomeUsuario$ = this.nomeUsuarioSubject.asObservable();
//
//
//	constructor() { }
//
//
//	logar(login: Login): Observable<string> {
//		return this.http.post<string>(this.API, login, { responseType: 'text' as 'json' });
//	}
//
//	//--------------------------------
//	armazenarToken(token: string) {
//	    localStorage.setItem('token', token);
//	    // Decodificar o token JWT e armazenar o nome do usuário
//	    const decodedToken: JwtPayload = (jwt_decode as any)(token);  // Usando 'as any' para contornar o problema
//	    this.nomeUsuario = decodedToken.sub ?? null;  // Garantir que não seja undefined
//	    this.nomeUsuarioSubject.next(this.nomeUsuario);  // Atualizar o BehaviorSubject
//	  }
//
//	obterNomeUsuario(): string | null {
//		return this.nomeUsuario;
//	}
//	//--------------------------------
//
//
//	addToken(token: string) {
//		localStorage.setItem('token', token);
//	}
//
//	removerToken() {
//		localStorage.removeItem('token');
//		this.nomeUsuario = null;
//		this.nomeUsuarioSubject.next(null);  // Atualizar o BehaviorSubject para null
//	}
//
//	getToken() {
//		return localStorage.getItem('token');
//	}
//
//	jwtDecode() {
//	    let token = this.getToken();
//	    if (token) {
//	      return (jwt_decode as any)(token);
//	    }
//	    return "";
//	  }
//
//	hasPermission(role: string) {
//		let user = this.jwtDecode() as Usuario;
//		if (user.role == role)
//			return true;
//		else
//			return false;
//	}
//
//
//}





import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode'; // Corrigido para garantir a importação correta
import { Login } from './login';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

interface JwtPayload {
  sub?: string;
  // Adicione outras propriedades se necessário
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);
  API = "http://localhost:8080/api/login";
  nomeUsuario: string | null = null;

  // BehaviorSubject para manter o nome do usuário atualizado
  private nomeUsuarioSubject = new BehaviorSubject<string | null>(null);
  nomeUsuario$ = this.nomeUsuarioSubject.asObservable();

  constructor() { }

  logar(login: Login): Observable<string> {
    return this.http.post<string>(this.API, login, { responseType: 'text' as 'json' });
  }

  //--------------------------------
  armazenarToken(token: string) {
    localStorage.setItem('token', token);
    // Decodificar o token JWT e armazenar o nome do usuário
    const decodedToken: JwtPayload = jwtDecode<JwtPayload>(token);  // Usando a tipagem correta
    this.nomeUsuario = decodedToken.sub ?? null;  // Garantir que não seja undefined
    this.nomeUsuarioSubject.next(this.nomeUsuario);  // Atualizar o BehaviorSubject
  }

  obterNomeUsuario(): string | null {
    return this.nomeUsuario;
  }
  //--------------------------------

  addToken(token: string) {
    localStorage.setItem('token', token);
	
	
	// Decodificar o token JWT e armazenar o nome do usuário
	  try {
	    const decodedToken = jwtDecode<JwtPayload>(token);  // Usando jwt_decode corretamente
	    console.log('Token decodificado:', decodedToken); // Log para verificar o conteúdo do token

	    this.nomeUsuario = decodedToken.sub ?? null; // Garantir que não seja undefined
	    console.log('Nome do usuário:', this.nomeUsuario);

	    this.nomeUsuarioSubject.next(this.nomeUsuario); // Atualizar o BehaviorSubject
	  } catch (error) {
	    console.error('Erro ao decodificar o token:', error);
	  }
  }

  removerToken() {
    localStorage.removeItem('token');
    this.nomeUsuario = null;
    this.nomeUsuarioSubject.next(null);  // Atualizar o BehaviorSubject para null
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);  // Usando a tipagem correta
    }
    return "";
  }

  hasPermission(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }
  
}
