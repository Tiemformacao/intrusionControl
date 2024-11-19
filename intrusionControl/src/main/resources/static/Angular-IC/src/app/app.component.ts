
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NgIf } from '@angular/common';
import { AparelhoDetalheComponent } from './components/aparelho-detalhe/aparelho-detalhe.component';
import { IrmaosComponent } from './components/irmaos/irmaos.component';
import { GrupoCadastroComponent } from './components/grupo-cadastro/grupo-cadastro.component';
//import {GrupoListaComponent} from './components/grupo-lista/grupo-lista.component';

//import { MatSelectModule } from '@angular/material/select';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatFormFieldModule } from '@angular/material/form-field';
//
//import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule } from '@angular/material/button';
//import { MatOptionModule } from '@angular/material/core';




@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		MenuLateralComponent,
		NgIf,
		AparelhoDetalheComponent,
		IrmaosComponent,
		GrupoCadastroComponent,
		//	GrupoListaComponent, 
		//	MatSelectModule,
		//	MatCheckboxModule,
		//	MatFormFieldModule,
		//	MatInputModule,
		//	MatButtonModule,
		//	MatOptionModule
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	aparelhoSelecionado: any;
	irmaosVisivel: boolean = false;
	grupoCadastroVisivel: boolean = false;


	onAparelhoSelecionado(aparelho: any) {
		this.aparelhoSelecionado = aparelho;
		this.irmaosVisivel = false; // Oculta os "Irmãos" ao selecionar um aparelho
		this.grupoCadastroVisivel = false;
	}

	//    onItemSelecionado(item: string) {
	//      if (item === 'irmaos') {
	//        this.irmaosVisivel = true;
	//        this.aparelhoSelecionado = null; // Oculta qualquer aparelho selecionado
	//      } else {
	//        this.irmaosVisivel = false; // Oculta os "Irmãos" ao selecionar qualquer outro item do menu
	//        this.aparelhoSelecionado = null; // Reseta a seleção do aparelho
	//      }
	//    }



	// Método chamado quando um item do menu lateral é selecionado
	onItemSelecionado(item: string) {
		if (item === 'irmaos') {
			this.irmaosVisivel = true;
			this.grupoCadastroVisivel = false;
			this.aparelhoSelecionado = null;
		} else if (item === 'grupos') {
			this.grupoCadastroVisivel = true;
			this.irmaosVisivel = false;
			this.aparelhoSelecionado = null;
		} else {
			this.irmaosVisivel = false;
			this.grupoCadastroVisivel = false;
			this.aparelhoSelecionado = null;
		}
	}

	

}

