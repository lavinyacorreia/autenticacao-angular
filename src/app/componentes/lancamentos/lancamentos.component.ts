import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/servicos/lancamento.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.lancamentoService.listarTodos().subscribe();
  }

}
