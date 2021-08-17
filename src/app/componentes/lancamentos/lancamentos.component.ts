import { Component, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/models/lancamento.model';
import { DataHoraService } from 'src/app/servicos/data-hora.service';
import { LancamentoService } from 'src/app/servicos/lancamento.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  lancamentos: Lancamento[] = [];
  dataHoraAtual = '';

  constructor(
    private lancamentoService: LancamentoService,
    private dataHoraService: DataHoraService) { }

  ngOnInit(): void {
    this.lancamentoService.listarTodos().subscribe(
      dados => this.lancamentos = dados.data.content,
      () => alert('Erro obtendo lançamentos.')
    );
    this.dataHoraService.dataHora.subscribe(
      dataHora => this.dataHoraAtual = dataHora
    );
  }

  urlLocalizacao(localizacao: string) {
    return "https://www.google.com/maps/search/?api=1&query=" + localizacao;
  }
}
