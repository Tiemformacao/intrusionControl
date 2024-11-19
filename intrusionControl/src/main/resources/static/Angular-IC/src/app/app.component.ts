
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NgIf } from '@angular/common';
import { AparelhoDetalheComponent } from './components/aparelho-detalhe/aparelho-detalhe.component';
import { IrmaosComponent } from './components/irmaos/irmaos.component';
import { GrupoCadastroComponent } from './components/grupo-cadastro/grupo-cadastro.component';
import { MapaFaccoesComponent } from './components/mapa-faccoes/mapa-faccoes.component';
import { ChangeDetectorRef } from '@angular/core';





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
		MapaFaccoesComponent
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	
	

	aparelhoSelecionado: any;
	irmaosVisivel: boolean = false;
	grupoCadastroVisivel: boolean = false;
	mapaFaccoesVisivel: boolean = false;
	exibirTelaInicial: boolean = true;



onAparelhoSelecionado(aparelho: any) {

    this.resetVisibilidade(); // Novo: reseta visibilidade dos componentes
    this.aparelhoSelecionado = aparelho;
    this.exibirTelaInicial = false; // Oculta a tela inicial ao selecionar um aparelho
	
  }



onItemSelecionado(item: string) {

    this.resetVisibilidade(); // Novo: reseta visibilidade dos componentes
    this.exibirTelaInicial = false; // Oculta a tela inicial ao selecionar qualquer item do menu

    switch (item) {
      case 'irmaos':
        this.irmaosVisivel = true;
        break;
      case 'grupos':
        this.grupoCadastroVisivel = true;
        break;
      case 'faccionados':
        this.mapaFaccoesVisivel = true;
        break;
    }

  }

  
  resetVisibilidade() {
      // Reseta a visibilidade de todos os componentes
      this.aparelhoSelecionado = null;
      this.irmaosVisivel = false;
      this.grupoCadastroVisivel = false;
      this.mapaFaccoesVisivel = false;
    }
	
	
}

