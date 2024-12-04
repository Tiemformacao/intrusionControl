//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { jwtDecode, JwtPayload } from 'jwt-decode';
//import { Usuario } from '../auth/usuario';
//
//@Injectable({
//  providedIn: 'root'
//})
//export class UsuarioService {
//  private baseUrl = 'http://localhost:8080/api/login';
//
//  constructor(private http: HttpClient) {}
//
//  login(loginData: any): Observable<any> {
//    return this.http.post<any>('http://localhost:8080/api/login', loginData);
//  }
//
//
//  // Novo método para obter o usuário por login
//    obterUsuarioPorLogin(login: string): Observable<any> {
//      return this.http.get(`${this.baseUrl}/${login}`);
//    }
//	
//	addToken(token: string) {
//	localStorage.setItem('token', token);
//	}
//	
//
//	removerToken() {
//	localStorage.removeItem('token');
//	}
//
//	getToken() {
//	return localStorage.getItem('token');
//	}
//
//	jwtDecode() {
//		let token = this.getToken();
//		if (token) {
//		return jwtDecode<JwtPayload>(token);
//		}
//	
//		return "";
//	}
//	
//	hasPermission(role: string) {
//	let user = this.jwtDecode() as Usuario;
//	if (user.role == role)
//		return true;
//	else
//		return false;
//	}
//	
//}
