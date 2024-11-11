import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { AparelhoDetalheComponent } from '../aparelho-detalhe/aparelho-detalhe.component';
import { CommonModule } from '@angular/common';
import { AparelhoService } from '../../services/aparelho.service';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgIf, AparelhoDetalheComponent, CommonModule,],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
	
	irmaosVisivel: boolean = false;
	aparelhos: any[] = [];
	aparelhoAtivo: any | null = null; // Armazena o aparelho atualmente selecionado
	itemAtivo: string | null = null;

  @Output() aparelhoSelecionado = new EventEmitter<string>();
  @Output() itemSelecionado = new EventEmitter<string>();

  constructor(private aparelhoService: AparelhoService) {}

  ngOnInit() {
    this.aparelhoService.getAparelhos().subscribe({
      next: (data) => {
        this.aparelhos = data;
      },
      error: (error) => {
        console.error('Erro ao buscar aparelhos:', error);
      }
    });
  }


  selecionarAparelho(aparelho: any) {
      this.aparelhoSelecionado.emit(aparelho);
      this.aparelhoAtivo = aparelho;
      this.itemAtivo = null; // Desativa qualquer outro item selecionado
    }

    onItemSelecionado(item: string) {
      this.itemSelecionado.emit(item);
      this.itemAtivo = item;
      this.aparelhoAtivo = null; // Desativa qualquer aparelho selecionado
    }
  
  
 // Método para expandir e encolher o menu
//  toggleMenu(): void {
//    this.isClosed = !this.isClosed; 
//  }
}
