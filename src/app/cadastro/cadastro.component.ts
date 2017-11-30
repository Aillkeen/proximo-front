import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email: string;
  senha: string;

  nomeConsultorio: string;

  rua: string;
  numero: number;
  estado: string;
  cidade: string;
  bairro: string;

  constructor() { }

  ngOnInit() {
  }

}
