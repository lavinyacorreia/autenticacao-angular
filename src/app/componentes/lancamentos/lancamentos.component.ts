import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair() {
    delete localStorage['token'];
    this.router.navigate(['/login']);
  }

}
