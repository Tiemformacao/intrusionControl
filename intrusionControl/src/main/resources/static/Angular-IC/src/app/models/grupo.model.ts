import { Faccao } from './faccao.model';
import { Irmao } from './irmao.model';

export class Grupo {
  id?: number; // ID é opcional quando estamos criando um novo grupo
  nomeGrupo: string;
  area: string;
  faccaoId: number; // Agora é um ID referenciando a facção
  irmaoId: number; // Agora é um ID referenciando o irmão
  faccao: Faccao | null;
  irmao: Irmao | null;
  removido: boolean;

  constructor(nomeGrupo: string = '', area: string = '', faccaoId: number = 0, irmaoId: number = 0) {
    this.nomeGrupo = nomeGrupo;
    this.area = area;
    this.faccaoId = faccaoId;
    this.irmaoId = irmaoId;
    this.faccao = new Faccao(); // Inicializa a facção com valores padrão
	this.faccao = null;
    this.irmao = null;   // Inicializa o irmão com valores padrão
    this.removido = false;
  }
}

