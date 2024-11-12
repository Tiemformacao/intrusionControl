import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { FaccaoService } from '../../services/faccao.service';
import { IrmaoService } from '../../services/irmao.service';
import { Grupo } from '../../models/grupo.model';
import { Faccao } from '../../models/faccao.model';
import { Irmao } from '../../models/irmao.model';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-grupo-cadastro',
	templateUrl: './grupo-cadastro.component.html',
	styleUrls: ['./grupo-cadastro.component.css'],
	standalone: true,
	imports: [NgIf, FormsModule, NgFor, CommonModule]
})
export class GrupoCadastroComponent implements OnInit {
	grupo: Grupo = new Grupo();
	faccoes: Faccao[] = [];
	irmaos: Irmao[] = [];

	grupos: Grupo[] = []; // Lista para armazenar os grupos

	constructor(
		private grupoService: GrupoService,
		private faccaoService: FaccaoService,
		private irmaoService: IrmaoService
	) { }

	ngOnInit(): void {
		// Carregar facções e irmãos ao inicializar o componente
		this.carregarFaccoes();
		this.carregarIrmaos();
		this.carregarGrupos();
	}

	carregarFaccoes(): void {
		this.faccaoService.getFaccoes().subscribe({
			next: (response: Faccao[]) => {
				this.faccoes = response;
				console.log('Facções carregadas:', this.faccoes);
			},
			error: (err) => {
				console.error('Erro ao buscar facções:', err);
			}
		});
	}

	carregarIrmaos(): void {
		this.irmaoService.getIrmaos().subscribe({
			next: (response: Irmao[]) => {
				this.irmaos = response;
				console.log('Irmãos carregados:', this.irmaos);
			},
			error: (err) => {
				console.error('Erro ao buscar irmãos:', err);
			}
		});
	}


//	carregarGrupos(): void {
//		this.grupoService.getGrupos().subscribe({
//			next: (response: Grupo[]) => {
//				this.grupos = response;
//				console.log('Grupos carregados:', this.grupos);
//			},
//			error: (err) => {
//				console.error('Erro ao buscar grupos:', err);
//			}
//		});
//	}


carregarGrupos(): void {
  this.grupoService.getGrupos().subscribe({
    next: (response: Grupo[]) => {
      // Garantir que os removidos fiquem no final
      this.grupos = response.sort((a, b) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);
      console.log('Grupos carregados:', this.grupos);
    },
    error: (err) => {
      console.error('Erro ao buscar grupos:', err);
    }
  });
}






	salvarGrupo(): void {
		this.grupoService.saveGrupo(this.grupo).subscribe({
			next: (response: Grupo) => {
				console.log('Grupo salvo com sucesso:', response);
				alert('Grupo salvo com sucesso!');
				this.grupo = new Grupo(); // Limpar o formulário após o salvamento
				this.grupos.unshift(response); // Adiciona o grupo salvo no topo da lista
			},
			error: (err) => {
				console.error('Erro ao salvar grupo:', err);
			},
			complete: () => {
				console.log('Operação concluída.');
			}
		});
	}


	marcarComoRemovido(grupo: Grupo): void {
	  this.grupoService.marcarComoRemovido(grupo.id!).subscribe({
	    next: (grupoAtualizado: Grupo) => {
	      grupo.removido = grupoAtualizado.removido; // Atualizar o estado local
	      // Mover o grupo para o final da lista
	      this.grupos = this.grupos.filter(g => g.id !== grupo.id); // Remover da posição original
	      this.grupos.push(grupo); // Adicionar ao final
	    },
	    error: (err) => {
	      console.error('Erro ao marcar grupo como removido:', err);
	    }
	  });
	}

}