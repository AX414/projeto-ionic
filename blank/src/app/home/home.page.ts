/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaUsuarios: any = [];
  public pagina = 1;
  public totalPaginas = 1;

  constructor(private userService: UserService){}

  ionViewWillEnter(){
    //busca a primeira página de usuários
    this.buscarUsuarios(1);
  }

  public buscarUsuarios(pagina:number){
    //se o número for incorreto, coloca 1 como default
    if(pagina<=0){
      pagina = 1;
    }
    this.pagina = pagina;
    //pede a informação da internet e guarda em dados
    this.userService.buscarTodos(pagina).subscribe(dados =>{
      this.listaUsuarios = dados['data'];
      this.totalPaginas = dados['data'];
      console.log("Lista: ", this.listaUsuarios);
    });
  }

}
