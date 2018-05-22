import {Indicado} from './indicado';

describe('Indicado', () => {
  it('should create an instance', () => {
    expect(new Indicado()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let indicado = new Indicado({
        cpfIndicante: 123456789,
        nomeDoIndicado: 'teste',
        cpfIndicado: 123456789,
        telDoIndicado: 123456789,
        alreadyExists: true,
    });
    expect(indicado.cpfIndicante).toEqual(123456789);
    expect(indicado.nomeDoIndicado).toEqual('teste');
    expect(indicado.cpfIndicado).toEqual(123456789);
    expect(indicado.telDoIndicado).toEqual(123456789);
    expect(indicado.alreadyExists).toEqual(true);
  });
});