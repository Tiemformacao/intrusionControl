export class Grupo {
  id?: number; // ID é opcional quando estamos criando um novo grupo
  nomeGrupo: string;
  area: string;
  faccaoId: number; // Agora é um ID referenciando a facção
  irmaoId: number; // Agora é um ID referenciando o irmão

  constructor(nomeGrupo: string, area: string, faccaoId: number, irmaoId: number) {
    this.nomeGrupo = nomeGrupo;
    this.area = area;
    this.faccaoId = faccaoId;
    this.irmaoId = irmaoId;
  }
}

