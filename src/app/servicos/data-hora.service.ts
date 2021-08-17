import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHoraService {

  dataHora = new BehaviorSubject(this.obterDataHoraAtual());

  constructor() { }

  obterDataHoraAtual(){
    const data = new Date();
    return data.toLocaleString('pt-BR');
  }

  atualizarDataHora(){
    this.dataHora.next(this.obterDataHoraAtual())
  }
}
