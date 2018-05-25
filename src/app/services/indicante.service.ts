import { Injectable } from '@angular/core';
import { Indicante } from '../models/indicante';
import { map } from 'rxjs/operators';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicanteService {
  // API_URL = `${document.baseURI}mocks`;

  constructor(private httpClient: HttpClient) { }

  public getIndicantes(){
  }
  public getIndicantesByCPF(cpf: number){
  }
  public sendIndicante(){
  }
  public verifyExists(){
  }
  public getData(){
  }
  public getStates(): any{     
    return this.httpClient.get('http://localhost:3000/lista')
  };
  
}
