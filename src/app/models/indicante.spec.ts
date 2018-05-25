import {Indicante} from './indicante';

describe('Indicante', () => {
  it('should create an instance', () => {
    expect(new Indicante()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let indicante = new Indicante({
        cep: 123456789,
        cidade: 'teste',
        cpf: 123456789,
        email: 'teste@gmail.com',
        empresaCadastrada: 'teste',
        endereco: 'teste',
        nome: 'teste',
        numero: 123456789,
        uf: 'sp',
        alreadyExists: true
    });
    expect(indicante.cep).toEqual('123456789');
    expect(indicante.cidade).toEqual('teste');
    expect(indicante.cpf).toEqual(123456789);
    expect(indicante.email).toEqual('teste@gmail.com');
    expect(indicante.empresaCadastrada).toEqual('teste');
    expect(indicante.endereco).toEqual('teste');
    expect(indicante.nome).toEqual('teste');
    expect(indicante.numero).toEqual(123456789);
    expect(indicante.uf).toEqual('sp');
    expect(indicante.alreadyExists).toEqual(true);
  });
});