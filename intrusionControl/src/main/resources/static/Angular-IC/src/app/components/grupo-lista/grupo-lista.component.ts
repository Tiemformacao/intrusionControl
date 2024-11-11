//import { Component, OnInit  } from '@angular/core';
//import { GrupoService, Grupo } from '../../services/grupo.service';
//import { CommonModule } from '@angular/common';
//
//import { MatSelectModule } from '@angular/material/select';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatTableModule } from '@angular/material/table';
//import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule } from '@angular/material/button';
//import { MatOptionModule } from '@angular/material/core';
//
//
//@Component({
//  selector: 'app-grupo-lista',
//  standalone: true,
//  imports: [
//	CommonModule,
//	MatSelectModule,
//	MatCheckboxModule,
//	MatFormFieldModule,
//	MatTableModule,
//	MatInputModule,
//	MatButtonModule,
//	MatOptionModule
//  ],
//  templateUrl: './grupo-lista.component.html',
//  styleUrl: './grupo-lista.component.css'
//})
//export class GrupoListaComponent {
//	
//  //Certifique-se de que seu grupo.service.ts já tem o método getGrupos para buscar os grupos. 
//  //No arquivo grupo-lista.component.ts, importe o serviço de grupos e configure-o para buscar os dados e exibi-los.
//	
//  grupos: Grupo[] = [];
//
//  constructor(private grupoService: GrupoService) {}
//  
//  
////  ngOnInit(): void {
////      this.grupoService.grupos$.subscribe((grupos) => {
////        this.grupos = grupos;
////      });
////    }
//  
//	
//	
//	ngOnInit(): void {
//	    this.carregarGrupos();
//	  }
//
//	  carregarGrupos() {
//	    this.grupoService.getGrupos().subscribe((grupos) => {
//	      this.grupos = grupos;
//	    });
//	  }
//
//	  removidoDesfeitoGrupo(grupo: Grupo) {
//	    this.grupoService.marcarComoRemovido(grupo.id!).subscribe({
//	      next: (updatedGrupo) => {
//	        // Atualizar o estado local do grupo
//	        grupo.removido = updatedGrupo.removido;
//	        // Mover o grupo removido para o fim da lista
//	        this.grupos = this.grupos.filter(g => g.id !== grupo.id);
//	        this.grupos.push(updatedGrupo);
//	      },
//	      error: (err) => console.error('Erro ao marcar grupo como removido', err)
//	    });
//	  }
//  
//
//}
