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
	
	paginaAtual: number = 0;  // Página atual
	 tamanhoPagina: number = 100;  // Quantidade de grupos por página
	 totalPaginas: number = 0;  // Número total de páginas

	 faccaoSelecionada: number | null = null;  // Armazena a facção selecionada para busca
	 irmaoSelecionado: number | null = null;  // Armazena o irmão selecionado para busca

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


//carregarGrupos(): void {
//  this.grupoService.getGrupos().subscribe({
//    next: (response: Grupo[]) => {
//      // Garantir que os removidos fiquem no final
//      this.grupos = response.sort((a, b) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);
//      console.log('Grupos carregados:', this.grupos);
//    },
//    error: (err) => {
//      console.error('Erro ao buscar grupos:', err);
//    }
//  });
//}


carregarGrupos(): void {
  this.grupoService.listarGruposPaginados(this.paginaAtual, this.tamanhoPagina).subscribe({
    next: (response) => {
      // Recebe os grupos da página atual
      const gruposPaginados = response.content;

      // Ordena os grupos para garantir que os removidos fiquem no final
      this.grupos = gruposPaginados.sort((a: Grupo, b: Grupo) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);
      
      // Atualiza o número total de páginas
      this.totalPaginas = response.totalPages;

      console.log('Grupos carregados (paginados e ordenados):', this.grupos);
    },
    error: (err) => {
      console.error('Erro ao buscar grupos (paginados):', err);
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
	
	
	
	
	
//	buscarPorFaccao(): void {
//	  if (this.faccaoSelecionada !== null) {
//	    this.grupoService.buscarPorFaccao(this.faccaoSelecionada, this.paginaAtual, this.tamanhoPagina).subscribe({
//	      next: (response) => {
//	        this.grupos = response.content;
//	        this.totalPaginas = response.totalPages;
//	        console.log('Grupos encontrados por facção:', this.grupos);
//	      },
//	      error: (err) => {
//	        console.error('Erro ao buscar por facção:', err);
//	      }
//	    });
//	  }
//	}


buscarPorFaccao(): void {
  if (this.faccaoSelecionada !== null) {
    this.grupoService.buscarPorFaccao(this.faccaoSelecionada, this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response) => {
        // Recebe os grupos filtrados da página atual
        const gruposFiltrados = response.content;

        // Ordena os grupos para garantir que os removidos fiquem no final
        this.grupos = gruposFiltrados.sort((a: Grupo, b: Grupo) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);

        // Atualiza o número total de páginas
        this.totalPaginas = response.totalPages;

        console.log('Grupos encontrados por facção (ordenados):', this.grupos);
      },
      error: (err) => {
        console.error('Erro ao buscar por facção:', err);
      }
    });
  }
}


//	buscarPorIrmao(): void {
//	  if (this.irmaoSelecionado !== null) {
//	    this.grupoService.buscarPorIrmao(this.irmaoSelecionado, this.paginaAtual, this.tamanhoPagina).subscribe({
//	      next: (response) => {
//	        this.grupos = response.content;
//	        this.totalPaginas = response.totalPages;
//	        console.log('Grupos encontrados por irmão:', this.grupos);
//	      },
//	      error: (err) => {
//	        console.error('Erro ao buscar por irmão:', err);
//	      }
//	    });
//	  }
//	}



buscarPorIrmao(): void {
  if (this.irmaoSelecionado !== null) {
    this.grupoService.buscarPorIrmao(this.irmaoSelecionado, this.paginaAtual, this.tamanhoPagina).subscribe({
      next: (response) => {
        // Recebe os grupos filtrados da página atual
        const gruposFiltrados = response.content;

        // Ordena os grupos para garantir que os removidos fiquem no final
        this.grupos = gruposFiltrados.sort((a: Grupo, b: Grupo) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);

        // Atualiza o número total de páginas
        this.totalPaginas = response.totalPages;

        console.log('Grupos encontrados por irmão (ordenados):', this.grupos);
      },
      error: (err) => {
        console.error('Erro ao buscar por irmão:', err);
      }
    });
  }
}

	
	
	proximaPagina(): void {
	  if (this.paginaAtual < this.totalPaginas - 1) {
	    this.paginaAtual++;
	    if (this.faccaoSelecionada !== null) {
	      this.buscarPorFaccao();
	    } else if (this.irmaoSelecionado !== null) {
	      this.buscarPorIrmao();
	    } else {
	      this.carregarGrupos();
	    }
	  }
	}

	paginaAnterior(): void {
	  if (this.paginaAtual > 0) {
	    this.paginaAtual--;
	    if (this.faccaoSelecionada !== null) {
	      this.buscarPorFaccao();
	    } else if (this.irmaoSelecionado !== null) {
	      this.buscarPorIrmao();
	    } else {
	      this.carregarGrupos();
	    }
	  }
	}


	listarTodos(): void {
	  // Reseta os filtros
	  this.faccaoSelecionada = null;
	  this.irmaoSelecionado = null;
	  this.paginaAtual = 0; // Começa da primeira página

	  // Carrega todos os grupos
	  this.carregarGrupos();
	}

}