import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioLogado: any = null;

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  // Método para definir o usuário logado após autenticação
  setUsuarioLogado(login: string): void {
    this.usuarioService.obterUsuarioPorLogin(login).subscribe(
      (usuario) => {
        this.usuarioLogado = usuario;
      },
      (error) => {
        console.error('Erro ao obter dados do usuário:', error);
      }
    );
  }

  // Método para obter as informações do usuário logado
  getUsuarioLogado(): any {
    return this.usuarioLogado;
  }

  // Método para realizar logout
  logout(): void {
    this.usuarioLogado = null;
    this.router.navigate(['/login']);
  }

  // Verificar se o usuário está autenticado
  isUsuarioAutenticado(): boolean {
    return this.usuarioLogado !== null;
  }
}
