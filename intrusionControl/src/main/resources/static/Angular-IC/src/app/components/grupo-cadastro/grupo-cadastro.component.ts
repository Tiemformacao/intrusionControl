import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { FaccaoService } from '../../services/faccao.service';
import { IrmaoService } from '../../services/irmao.service';
import { Grupo } from '../../models/grupo.model';
import { Faccao } from '../../models/faccao.model';
import { Irmao } from '../../models/irmao.model';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grupo-cadastro',
  templateUrl: './grupo-cadastro.component.html',
  styleUrls: ['./grupo-cadastro.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule, NgFor]
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
  ) {}

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
  
  
  carregarGrupos(): void {
      this.grupoService.getGrupos().subscribe({
        next: (response: Grupo[]) => {
          this.grupos = response;
          console.log('Grupos carregados:', this.grupos);
        },
        error: (err) => {
          console.error('Erro ao buscar grupos:', err);
        }
      });
    }
  

//  salvarGrupo(): void {
//    this.grupoService.saveGrupo(this.grupo).subscribe({
//      next: (response: Grupo) => {
//        console.log('Grupo salvo com sucesso:', response);
//        alert('Grupo salvo com sucesso!');
//        this.grupo = new Grupo(); // Limpar o formulário após o salvamento
//		this.carregarGrupos(); // Atualizar a lista de grupos
//      },
//      error: (err) => {
//        console.error('Erro ao salvar grupo:', err);
//        alert('Erro ao salvar o grupo!');
//      },
//      complete: () => {
//        console.log('Operação concluída.');
//      }
//    });
//  }
  
  
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
  
}