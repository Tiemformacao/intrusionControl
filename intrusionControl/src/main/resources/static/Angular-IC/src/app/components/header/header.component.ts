import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';
import { Subscription } from 'rxjs';
import {jwtDecode} from 'jwt-decode';


@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

	nomeUsuario: string | null = null;
	private subscription: Subscription = new Subscription();

	constructor(private loginService: LoginService, private router: Router) { }


	//	ngOnInit(): void {
	//		// Subscrição para obter o valor mais recente do nome do usuário
	//		this.subscription = this.loginService.nomeUsuario$.subscribe(nome => {
	//		      console.log('Nome do usuário recebido no header:', nome);
	//		      this.nomeUsuario = nome;
	//		});
	//	}


	ngOnInit(): void {
		// Verifica se existe um token no localStorage
		const token = localStorage.getItem('token');
		if (token) {
			// Decodifica o token e obtém o nome do usuário
			const decodedToken: any = jwtDecode(token);
			this.nomeUsuario = decodedToken.sub || null;
		}
	}

	onLogout() {
		this.loginService.removerToken();
		this.nomeUsuario = null;
		this.router.navigate(['/login']);
	}


	ngOnDestroy(): void {
		// Cancelar a subscrição ao destruir o componente
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}








	//	constructor(private router: Router) {}
	//
	//	  ngOnInit() {
	//	    const usuario = localStorage.getItem('usuario');
	//	    if (usuario) {
	//	      this.nomeUsuario = JSON.parse(usuario).nome;
	//	    }
	//	  }
	//	  
	//	  
	//	  onLogout() {
	//	      // Remover o usuário do localStorage
	//	      localStorage.removeItem('usuario');
	//	      // Redirecionar para a página de login
	//	      this.router.navigate(['/login']);
	//	    }
}
