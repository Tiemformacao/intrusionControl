import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../auth/login.service';
import { Login } from '../../auth/login';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	
	login: Login = new Login();
	loginData = { login: '', senha: '' };
	mensagemErro: string = '';

	constructor(private loginService: LoginService, private router: Router) { }

	onLogin() {
		this.loginService.logar(this.login).subscribe({
			next: token => {
				if(token) {
					//O usuário e senha digitados estavam corretos
					this.loginService.addToken(token);
					this.router.navigate(['/ic-system']);
				}else {
					alert('Usuário ou senha incorretos!');
				}
			},
//			error: erro => {
//				alert('Deu erro');
//			}
		})
		
		
		
		
		
		
		
//			.subscribe(
//				response => {
//					// Salvar os dados do usuário no localStorage
//					localStorage.setItem('usuario', JSON.stringify(response));
//					// Redirecionar para a página principal após o login bem-sucedido
//					this.router.navigate(['/home']);
//				},
//				error => {
//					console.error('Erro de autenticação', error);
//					// Definir a mensagem de erro a ser exibida ao usuário
//					this.mensagemErro = 'Login ou senha inválidos.';
//				}
//			);
	}

}
