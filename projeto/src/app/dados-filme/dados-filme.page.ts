import { IFilmeApi } from './../models/IFilme.API.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  /*Não inicializei porque se não tiver filme, só retorna nulo*/
  filme: IFilmeApi;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.getDados('filme');
    this.generos = this.dadosService.getDados('generos');
    console.log('Filme Enviado',this.filme);
  }

}
