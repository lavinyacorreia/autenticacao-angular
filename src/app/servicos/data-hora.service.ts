import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataHoraService {

  dataHora = new BehaviorSubject(this.obterDataHoraAtual());

  dataHoraTempoReal = interval(500).pipe(
    map(()=> this.obterDataHoraAtual()), share()
  )
  constructor() { }

  obterDataHoraAtual(){
    const data = new Date();
    return data.toLocaleString('pt-BR');
  }

  atualizarDataHora(){
    this.dataHora.next(this.obterDataHoraAtual());
  }
}
