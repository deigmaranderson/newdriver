export class Indicado {
    cpfIndicante: number;
    nomeDoIndicado: string;
    cpfIndicado: number;
    telDoIndicado: number;
    alreadyExists: boolean = true;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
