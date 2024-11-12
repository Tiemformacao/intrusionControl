export class Irmao {
  id?: number; // ID é opcional
  nomeIrmao: string;

  constructor(nomeIrmao: string = '') {
    this.nomeIrmao = nomeIrmao;
  }
}