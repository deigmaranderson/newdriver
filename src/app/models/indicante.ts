export class Indicante {
    email: string;
    cpf: number;
    nome: string;
    cep: number;
    endereco: string;
    numero: number;
    cidade: string;
    uf: string;
    empresaCadastrada: string; //number??
    alreadyExists: boolean;  

    public constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
