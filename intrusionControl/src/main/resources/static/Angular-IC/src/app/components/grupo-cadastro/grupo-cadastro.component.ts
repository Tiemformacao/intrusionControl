import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { FaccaoService } from '../../services/faccao.service';
import { IrmaoService } from '../../services/irmao.service';
import { Grupo } from '../../models/grupo.model';
import { Faccao } from '../../models/faccao.model';
import { Irmao } from '../../models/irmao.model';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

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
	tamanhoPagina: number = 300;  // Quantidade de grupos por página
	totalPaginas: number = 0;  // Número total de páginas

	faccaoSelecionada: number | null = null;  // Armazena a facção selecionada para busca
	irmaoSelecionado: number | null = null;  // Armazena o irmão selecionado para busca


	areaBusca: string = '';
	areaBuscaSubject: Subject<string> = new Subject<string>();

	nomeGrupoBusca: string = '';
	nomeGrupoBuscaSubject: Subject<string> = new Subject<string>();

	modoEdicao: boolean = false; // Por padrão, inicia no modo de cadastro

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

		// Inscrevendo a busca para ser chamada após o usuário parar de digitar por um tempo
		this.areaBuscaSubject.pipe(
			debounceTime(300), // Aguarda 300ms após o último evento
			distinctUntilChanged() // Apenas valores distintos (não repetidos)
		).subscribe(area => {
			if (area) {
				this.buscarPorArea(area);
			} else {
				this.carregarGrupos(); // Se o campo estiver vazio, carrega todos os grupos
			}
		});

		// Inscrevendo a busca para ser chamada após o usuário parar de digitar por um tempo
		this.nomeGrupoBuscaSubject.pipe(
			debounceTime(300), // Aguarda 300ms após o último evento
			distinctUntilChanged() // Apenas valores distintos (não repetidos)
		).subscribe(nomeGrupo => {
			if (nomeGrupo) {
				this.buscarPorNomeGrupo(nomeGrupo);
			} else {
				this.carregarGrupos(); // Se o campo estiver vazio, carrega todos os grupos
			}
		});
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





	//	salvarGrupo(grupoForm: NgForm): void {
	//
	//		if (grupoForm.invalid) {
	//			return; // Não continua se o formulário for inválido.
	//		}
	//
	//		this.grupoService.saveGrupo(this.grupo).subscribe({
	//			next: (response: Grupo) => {
	//				console.log('Grupo salvo com sucesso:', response);
	//				alert('Grupo salvo com sucesso!');
	//
	//
	//				// Aqui redefinimos o formulário após salvar com sucesso
	//				grupoForm.resetForm();
	//
	//
	//				// Cria uma nova instância da classe Grupo
	//				this.grupo = new Grupo();
	//
	//
	//
	//
	//				this.grupos.unshift(response); // Adiciona o grupo salvo no topo da lista
	//			},
	//			error: (err) => {
	//				console.error('Erro ao salvar grupo:', err);
	//			},
	//			complete: () => {
	//				console.log('Operação concluída.');
	//			}
	//		});
	//	}


	salvarGrupo(grupoForm: NgForm): void {
		if (grupoForm.invalid) {
			return; // Não continua se o formulário for inválido.
		}

		if (this.grupo.id) {
			// Atualiza o grupo existente
			this.grupoService.updateGrupo(this.grupo.id, this.grupo).subscribe({
				next: (response: Grupo) => {
					console.log('Grupo atualizado com sucesso:', response);
					alert('Grupo atualizado com sucesso!');
					this.carregarGrupos(); // Atualiza a lista de grupos na tabela
					grupoForm.resetForm(); // Reseta o formulário
					this.grupo = new Grupo(); // Limpa o objeto de grupo
					this.modoEdicao = false; // Volta para modo de cadastro
				},
				error: (err) => {
					console.error('Erro ao atualizar grupo:', err);
				}
			});
		} else {
			// Cria um novo grupo
			this.grupoService.saveGrupo(this.grupo).subscribe({
				next: (response: Grupo) => {
					console.log('Grupo salvo com sucesso:', response);
					alert('Grupo salvo com sucesso!');
					this.carregarGrupos(); // Atualiza a lista de grupos na tabela
					grupoForm.resetForm(); // Reseta o formulário
					this.grupo = new Grupo(); // Limpa o objeto de grupo
				},
				error: (err) => {
					console.error('Erro ao salvar grupo:', err);
				}
			});
		}
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




	buscarPorArea(area: string): void {
		this.grupoService.buscarPorArea(area).subscribe({
			next: (response: Grupo[]) => {
				// Ordena os grupos para garantir que os removidos fiquem no final
				this.grupos = response.sort((a: Grupo, b: Grupo) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);
				console.log('Grupos encontrados por área (ordenados):', this.grupos);
			},
			error: (err) => {
				console.error('Erro ao buscar por área:', err);
			}
		});
	}

	onAreaInputChange(value: string): void {
		this.areaBuscaSubject.next(value);
	}


	buscarPorNomeGrupo(nomeGrupo: string): void {
		this.grupoService.buscarPorNomeGrupo(nomeGrupo).subscribe({
			next: (response: Grupo[]) => {
				// Ordena os grupos para garantir que os removidos fiquem no final
				this.grupos = response.sort((a: Grupo, b: Grupo) => (a.removido === b.removido) ? 0 : a.removido ? 1 : -1);
				console.log('Grupos encontrados por área (ordenados):', this.grupos);
			},
			error: (err) => {
				console.error('Erro ao buscar por área:', err);
			}
		});
	}

	onNomeGrupoInputChange(value: string): void {
		this.nomeGrupoBuscaSubject.next(value);
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


	//	----------------------Esse funciona------------------------------//
//	editarGrupo(grupo: Grupo): void {
//		this.grupo = {
//			...grupo,
//			faccao: this.faccoes.find(f => f.id === grupo.faccao?.id) || null, // Busca a facção correspondente
//			irmao: this.irmaos.find(i => i.id === grupo.irmao?.id) || null // Busca o irmão correspondente
//		};
//
//		//window.scrollTo({ top: 0, behavior: 'smooth' }); // Opcional: rola para o topo onde está o formulário
//		const formulario = document.getElementById('formulario-edicao');
//		if (formulario) {
//		  formulario.scrollIntoView({ behavior: 'smooth' });
//		}
//	}

editarGrupo(grupo: Grupo): void {
  this.grupo = {
    ...grupo,
    faccao: this.faccoes.find(f => f.id === grupo.faccao?.id) || null,
    irmao: this.irmaos.find(i => i.id === grupo.irmao?.id) || null,
  };
  this.modoEdicao = true; // Define como edição
  const formulario = document.getElementById('formulario-edicao');
  if (formulario) {
    formulario.scrollIntoView({ behavior: 'smooth' });
  }
}







	//	----------------------VALIDAÇÕES------------------------------//

	nomeGrupoErro: string | null = null;

	validarNomeGrupo(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Validação para verificar o limite de caracteres
		if (inputElement.value.length > 30) {
			this.nomeGrupoErro = 'O máximo permitido são 30 caracteres.';
			inputElement.value = inputElement.value.substring(0, 30); // Trunca diretamente no campo
		} else {
			this.nomeGrupoErro = null; // Remove a mensagem de erro se estiver dentro do limite
		}

		// Atualiza o modelo para refletir o valor truncado
		this.grupo.nomeGrupo = inputElement.value;
	}



	areaErro: string | null = null;

	validarArea(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Validação para verificar o limite de caracteres
		if (inputElement.value.length > 30) {
			this.areaErro = 'O máximo permitido são 30 caracteres.';
			inputElement.value = inputElement.value.substring(0, 30); // Trunca diretamente no campo
		} else {
			this.areaErro = null; // Remove a mensagem de erro se estiver dentro do limite
		}

		// Atualiza o modelo para refletir o valor truncado
		this.grupo.area = inputElement.value;
	}




}