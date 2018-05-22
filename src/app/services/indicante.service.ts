import { Injectable } from '@angular/core';
import { Indicante } from '../models/indicante';

@Injectable({
  providedIn: 'root'
})
export class IndicanteService {

  constructor() { }

  public getIndicantes(){
    Indicante.prototype.cidade = 'teste';
  }
  public getIndicantesByCPF(cpf: number){
    
  }
  public sendIndicante(){

  }
  public verifyExists(){
    
  }
  public getData(){

  }

}
