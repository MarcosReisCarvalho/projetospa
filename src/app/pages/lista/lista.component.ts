import { Component, OnInit } from '@angular/core';
import { Herois } from 'src/app/model/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  exibeTabela: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  listaHerois: Herois[] = [
    {nome: "Superman", poder: "Super força"},
    {nome: "Batman", poder: "inteligência"},
    {nome: "Flash", poder: "Super velocidade"},
  ]

  displayedColumns: string[] = ['Nome', "Poder"]

  exibir(): void {
    this.exibeTabela = true;
  }
}
