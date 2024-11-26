import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
	nomeUsuario: string = '';
	
	constructor(private router: Router) {}

	  ngOnInit() {
	    const usuario = localStorage.getItem('usuario');
	    if (usuario) {
	      this.nomeUsuario = JSON.parse(usuario).nome;
	    }
	  }
	  
	  
	  onLogout() {
	      // Remover o usuário do localStorage
	      localStorage.removeItem('usuario');
	      // Redirecionar para a página de login
	      this.router.navigate(['/login']);
	    }
}
