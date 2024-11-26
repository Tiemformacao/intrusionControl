
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
import { HomeComponent } from './components/home/home.component';





@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,
		HeaderComponent,
		MenuLateralComponent,
		NgIf,
		AparelhoDetalheComponent,
		IrmaosComponent,
		GrupoCadastroComponent,
		MapaFaccoesComponent,
		HomeComponent,
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {



}

