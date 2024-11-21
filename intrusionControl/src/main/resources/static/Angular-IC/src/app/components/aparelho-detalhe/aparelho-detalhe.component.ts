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

				//				VALIDAÇÃO PARA O EMAIL ANTES DE SALVAR
				if (field === 'contaGoogle' && this.aparelho.contaGoogle && this.erroEmail ) {
					alert('Por favor, corrija o e-mail antes de salvar.');
					return; // Não permite salvar se o e-mail for inválido
				}



				// VALIDAÇÃO PARA O CHIP01 ANTES DE SALVAR
				if (field === 'chip01' && this.aparelho.chip01 && this.aparelho.chip01.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}


				// VALIDAÇÃO PARA O CHIP02 ANTES DE SALVAR
				if (field === 'chip02' && this.aparelho.chip02 && this.aparelho.chip02.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}



				// VALIDAÇÃO PARA O whatsapp01 ANTES DE SALVAR
				if (field === 'whatsapp01' && this.aparelho.whatsapp01 && this.aparelho.whatsapp01.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}


				// VALIDAÇÃO PARA O whatsapp02 ANTES DE SALVAR
				if (field === 'whatsapp02' && this.aparelho.whatsapp02 && this.aparelho.whatsapp02.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}


				// VALIDAÇÃO PARA O whatsappGb01 ANTES DE SALVAR
				if (field === 'whatsappGb01' && this.aparelho.whatsappGb01 && this.aparelho.whatsappGb01.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}


				// VALIDAÇÃO PARA O whatsappGb02 ANTES DE SALVAR
				if (field === 'whatsappGb02' && this.aparelho.whatsappGb02 && this.aparelho.whatsappGb02.length !== 11) {
					alert('O número do chip deve ter exatamente 11 dígitos.');
					return; // Não permite salvar se o chip não for válido
				}


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


	//	-------------------------- VALIDAÇÕES ------------------------------


	//----------------------------Marca/Modelo------------------------------

	erroMarcaModelo: string | null = null;

	validarMarcaModelo(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Se o valor ultrapassar 20 caracteres, trunca
		if (inputElement.value.length > 30) {
			this.erroMarcaModelo = 'O máximo permitido são 30 caracteres.';
			inputElement.value = inputElement.value.substring(0, 30); // Trunca diretamente no campo
		} else {
			this.erroMarcaModelo = null; // Remove a mensagem de erro se válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.marcaModelo = inputElement.value;
	}



	//----------------------------Conta google------------------------------


	erroEmail: string | null = null;

	// Validação em tempo real para o campo de e-mail, não permitindo espaços
	validarEmail(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let email = inputElement.value;

		// Remove todos os espaços em branco
		email = email.replace(/\s/g, '');

		// Expressão regular para validar o formato do e-mail
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		// Verifica se o e-mail está no formato correto
		if (!emailRegex.test(email)) {
			this.erroEmail = 'Por favor, insira um e-mail válido sem espaços.';
		} else {
			this.erroEmail = null; // Remove a mensagem de erro se o e-mail for válido
		}

		// Atualiza o modelo para refletir o valor atualizado (sem espaços)
		inputElement.value = email; // Atualiza diretamente o input
		this.aparelho.contaGoogle = email; // Atualiza a variável do modelo
	}



	//----------------------------Observação------------------------------
	erroObservacao: string | null = null;

	validarObservacao(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 50 caracteres e, se sim, trunca
		if (inputElement.value.length > 100) {
			this.erroObservacao = 'O máximo permitido são 100 caracteres.';
			inputElement.value = inputElement.value.substring(0, 100); // Trunca diretamente no campo
		} else {
			this.erroObservacao = null; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.observacao = inputElement.value;
	}



	//----------------------------Chip 01------------------------------
	erroChip01: string | null = null;

	validarChip01(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.chip01 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroChip01 = 'O chip deve conter exatamente 11 números.';
		} else {
			this.erroChip01 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}


	//----------------------------Cadastro Chip 01------------------------------
	erroCadastro: string | null = null;
	erroCadastro1: string | null = null;

	validarCadastro(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 100 caracteres e, se sim, trunca
		if (inputElement.value.length > 100) {
			this.erroCadastro1 = 'O máximo permitido são 100 caracteres.';
			inputElement.value = inputElement.value.substring(0, 100); // Trunca diretamente no campo
		} else {
			this.erroCadastro1 = ""; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.cadastroChip01 = inputElement.value;

		// Validação: verificar se tem exatamente 11 números
		if (inputElement.value) {
			this.erroCadastro = 'Insira apenas nome e CPF.';
		}
	}


	//----------------------------Chip 02------------------------------
	erroChip02: string | null = null;

	validarChip02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.chip02 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroChip02 = 'O chip deve conter exatamente 11 números.';
		} else {
			this.erroChip02 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}


	//----------------------------Cadastro Chip 02------------------------------
	erroCadastro3: string | null = null;
	erroCadastro2: string | null = null;

	validarCadastroChip02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 100 caracteres e, se sim, trunca
		if (inputElement.value.length > 100) {
			this.erroCadastro2 = 'O máximo permitido são 100 caracteres.';
			inputElement.value = inputElement.value.substring(0, 100); // Trunca diretamente no campo
		} else {
			this.erroCadastro2 = ""; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.cadastroChip02 = inputElement.value;

		// Validação: verificar se tem exatamente 11 números
		if (inputElement.value) {
			this.erroCadastro3 = 'Insira apenas nome e CPF.';
		}
	}



	//----------------------------Whatsapp01------------------------------
	erroWhatsapp01: string | null = null;

	validarwhatsapp01(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.whatsapp01 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroWhatsapp01 = 'O Whatsapp deve conter exatamente 11 números.';
		} else {
			this.erroWhatsapp01 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}




	//----------------------------IrmaoWA01------------------------------
	erroIrmaoWA01: string | null = null;

	validarirmaoWA01(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 20 caracteres e, se sim, trunca
		if (inputElement.value.length > 20) {
			this.erroIrmaoWA01 = 'O máximo permitido são 20 caracteres.';
			inputElement.value = inputElement.value.substring(0, 20); // Trunca diretamente no campo
		} else {
			this.erroIrmaoWA01 = null; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.irmaoWA01 = inputElement.value;
	}


	//----------------------------Whatsapp02------------------------------
	erroWhatsapp02: string | null = null;

	validarwhatsapp02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.whatsapp02 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroWhatsapp02 = 'O Whatsapp deve conter exatamente 11 números.';
		} else {
			this.erroWhatsapp02 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}



	//----------------------------IrmaoWA02------------------------------
	erroIrmaoWA02: string | null = null;

	validarirmaoWA02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 20 caracteres e, se sim, trunca
		if (inputElement.value.length > 20) {
			this.erroIrmaoWA02 = 'O máximo permitido são 20 caracteres.';
			inputElement.value = inputElement.value.substring(0, 20); // Trunca diretamente no campo
		} else {
			this.erroIrmaoWA02 = null; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.irmaoWA02 = inputElement.value;
	}


	//----------------------------WhatsappGb01------------------------------
	erroWhatsappGb01: string | null = null;

	validarWhatsappGb01(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.whatsappGb01 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroWhatsappGb01 = 'O Whatsapp deve conter exatamente 11 números.';
		} else {
			this.erroWhatsappGb01 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}


	//----------------------------IrmaoGB01------------------------------
	erroIrmaoGB01: string | null = null;

	validarirmaoGB01(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 20 caracteres e, se sim, trunca
		if (inputElement.value.length > 20) {
			this.erroIrmaoGB01 = 'O máximo permitido são 20 caracteres.';
			inputElement.value = inputElement.value.substring(0, 20); // Trunca diretamente no campo
		} else {
			this.erroIrmaoGB01 = null; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.irmaoGB01 = inputElement.value;
	}



	//----------------------------WhatsappGb02------------------------------
	erroWhatsappGb02: string | null = null;

	validarWhatsappGb02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		let valor = inputElement.value;

		// Remove todos os caracteres que não sejam números
		valor = valor.replace(/[^0-9]/g, '');

		// Trunca para garantir no máximo 11 caracteres
		if (valor.length > 11) {
			valor = valor.substring(0, 11);
		}

		// Atualiza o valor no campo de entrada
		inputElement.value = valor;

		// Atualiza o modelo para refletir o valor truncado e limpo
		this.aparelho.whatsappGb02 = valor;

		// Validação: verificar se tem exatamente 11 números
		if (valor.length !== 11) {
			this.erroWhatsappGb02 = 'O Whatsapp deve conter exatamente 11 números.';
		} else {
			this.erroWhatsappGb02 = null; // Remove a mensagem de erro se o valor estiver correto
		}
	}


	//----------------------------IrmaoGB02------------------------------
	erroIrmaoGB02: string | null = null;

	validarirmaoGB02(event: Event): void {
		const inputElement = event.target as HTMLInputElement;

		// Verifica se o valor ultrapassa 20 caracteres e, se sim, trunca
		if (inputElement.value.length > 20) {
			this.erroIrmaoGB02 = 'O máximo permitido são 20 caracteres.';
			inputElement.value = inputElement.value.substring(0, 20); // Trunca diretamente no campo
		} else {
			this.erroIrmaoGB02 = null; // Remove a mensagem de erro se o valor for válido
		}

		// Atualiza o modelo para refletir o valor truncado
		this.aparelho.irmaoGB02 = inputElement.value;
	}




}
