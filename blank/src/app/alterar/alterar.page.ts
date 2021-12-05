/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/dot-notation */
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserService } from '../services/user.service';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.page.html',
  styleUrls: ['./alterar.page.scss'],
})
export class AlterarPage implements OnInit {

  public usuario: Usuario = {};
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.buscarId(this.id).subscribe(dados =>{
      this.usuario.name = dados['data'].first_name + " " + dados['data'].last_name;
      this.usuario.id = dados['data'].id;
    });
  }

  public salvar(){
    this.userService.alterar(this.usuario).subscribe(retorno =>{
      this.usuario = retorno;
    });
  }

}
