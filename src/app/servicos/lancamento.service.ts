import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Lancamento } from '../models/lancamento.model';
import { HttpService } from './http.service';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  listarTodos(): Observable<any> {
    const id = this.httpService.obterIdUsuario();    

    return this.http.get(
      env.apiBaseUrl + 'api/lancamentos/funcionario/' + id,
      this.httpService.headers()
    );
  }

  downloadCSV(lancamentos: Lancamento[]) {
    const colunas = 'ID,Data,Hora,Tipo,Localização\n';
    const linhas: string[] = [];
    lancamentos.forEach(lanc => {
      const dataHora = lanc.data.split(' ');
      const linha = `${lanc.id},${dataHora[0]},${dataHora[1]},${lanc.tipo},"${lanc.localizacao}"`;
      linhas.push(linha);
    });
    const dados = colunas + linhas.join('\n');
    const blob = new Blob([dados], { type: 'text/csv' });
    saveAs(blob, 'lancamentos.csv');
  }

}
