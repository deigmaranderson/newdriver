export class Indicante {
    email?: string;
    cpf?: number;
    nome?: string;
    cep: string;
    endereco?: string;
    logradouro: string;
    numero?: number;
    cidade?: string;
    localidade: string;
    uf: string;
    complemento: string;
    empresaCadastrada?: string; //number??
    alreadyExists?: boolean;  

    public constructor(values: Object = {}){
        Object.assign(this, values);
    }
}

