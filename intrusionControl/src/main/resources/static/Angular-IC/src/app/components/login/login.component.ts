import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	

	loginData = { login: '', senha: '' };
	mensagemErro: string = '';

	constructor(private usuarioService: UsuarioService, private router: Router) { }

	onLogin() {
		this.usuarioService.login(this.loginData)
			.subscribe(
				response => {
					// Salvar os dados do usuário no localStorage
					localStorage.setItem('usuario', JSON.stringify(response));
					// Redirecionar para a página principal após o login bem-sucedido
					this.router.navigate(['/home']);
				},
				error => {
					console.error('Erro de autenticação', error);
					// Definir a mensagem de erro a ser exibida ao usuário
					this.mensagemErro = 'Login ou senha inválidos.';
				}
			);
	}

}
