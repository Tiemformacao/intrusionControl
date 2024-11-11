import { Component, Input, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { AparelhoService } from '../../services/aparelho.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//import { GrupoService } from '../../services/grupo.service';

@Component({
	selector: 'app-aparelho-detalhe',
	standalone: true,
	imports: [NgIf, FormsModule],
	providers: [DatePipe],
	templateUrl: './aparelho-detalhe.component.html',
	styleUrls: ['./aparelho-detalhe.component.css'],
})
export class AparelhoDetalheComponent {

	@Input() aparelho: any;

	// Controle de modo de edição para cada campo
	editMode: { [key: string]: boolean } = {};

	constructor(private aparelhoService: AparelhoService, private datePipe: DatePipe) { }
	
//	private grupoService: GrupoService  -> Estava no parentese acima

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['aparelho'] && changes['aparelho'].currentValue) {
			this.aparelho.isEditMode = this.aparelho.isEditMode || {
				marcaModelo: false,
				contaGoogle: false,
				observacao: false,
				chip01: false,
				ultRecChip01: false,
				cadastroChip01: false,
				chip02: false,
				ultRecChip02: false,
				cadastroChip02: false,
				whatsapp01: false,
				whatsapp02: false,
				whatsappGb01: false,
				whatsappGb02: false,
				irmaoWa01: false,
				irmaoWa02: false,
				irmaogb01: false,
				irmaogb02: false,
			};
		}
	}

	resetarDados(): void {
		// Qualquer lógica de reset ou atualização
		console.log('Aparelho atualizado:', this.aparelho);
	}

	toggleEditMode(field: string): void {
		this.aparelho.isEditMode[field] = !this.aparelho.isEditMode[field];

		if (this.aparelho.isEditMode[field] && field.includes('Recarga')) {
			// Transformar para o formato que o input de data aceita (yyyy-MM-dd)
			this.aparelho[field] = this.datePipe.transform(this.aparelho[field], 'yyyy-MM-dd');
		}
	}

	saveEdit(field: string): void {
		// Transformar de volta para o formato de exibição (dd/MM/yyyy)
		if (field.includes('Recarga')) {
			this.aparelho[field] = this.datePipe.transform(this.aparelho[field], 'dd/MM/yyyy');
		}

		this.aparelhoService.updateAparelho(this.aparelho.id_aparelho, this.aparelho).subscribe({
			next: (response) => {
				console.log('Atualização bem-sucedida:', response);
				this.toggleEditMode(field); // Voltar ao modo de visualização após salvar

				// Adicione aqui a lógica para atualizar os irmãos
				// Atualizar a lista de irmãos no GrupoService
//				this.grupoService.atualizarIrmaos();
			},
			error: (error) => {
				console.error('Erro ao atualizar:', error);
			},
		});
	}

	formatarData(data: string): string {
		return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
	}
}
