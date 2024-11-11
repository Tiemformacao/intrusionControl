import { Component, OnInit  } from '@angular/core';
import { IrmaoService } from '../../services/irmaos-cadastrados.service';
import { CommonModule } from '@angular/common';

interface Irmao {
  nomeIrmao: string;
  whatsapp: string;
  idAparelho: string;
}

@Component({
  selector: 'app-irmaos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './irmaos.component.html',
  styleUrl: './irmaos.component.css'
})

//Agora que temos um serviço que faz a requisição dos dados (IrmaosService), precisamos utilizá-lo no componente irmaos (no caso, esse aqui!).

export class IrmaosComponent implements OnInit {
	
  irmaos: Irmao[] = [];
  irmaosFiltrados: Irmao[] = []; // Lista para os irmãos filtrados (inicialmente mostra todos)

  constructor(private irmaosCadastradosService: IrmaoService) { }

  ngOnInit(): void {
    this.fetchIrmaos();
  }

  fetchIrmaos(): void {
    this.irmaosCadastradosService.getIrmaos().subscribe({
      next: (data) => {
        this.irmaos = data.filter((irmao: Irmao) => irmao.nomeIrmao && irmao.nomeIrmao.trim() !== '');
		this.irmaosFiltrados = [...this.irmaos];
      },
      error: (error) => {
        console.error('Erro ao buscar os irmãos:', error);
      }
    });
  }
  
  filtrarPorIrmao(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      const nomeIrmao = selectElement.value;

      if (nomeIrmao && nomeIrmao !== '') {
        // Filtra apenas o irmão selecionado
        this.irmaosFiltrados = this.irmaos.filter((irmao: Irmao) => irmao.nomeIrmao === nomeIrmao);
      } else {
        // Se não tiver nenhum selecionado, mostra todos
        this.irmaosFiltrados = [...this.irmaos];
      }
    }

} 