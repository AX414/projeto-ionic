import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  public buscarTodos(pagina: number){
    //se o número for incorreto, coloca 1 como default
    if(pagina<=0){
      pagina = 1;
    }
    // retorna a url da pagina
    return this.http.get(`${this.url}?page=${pagina}`);
  }

  public buscarId(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  public cadastrar(usuario: Usuario){
    return this.http.post(this.url,usuario);
  }

  public alterar(usuario: Usuario){
    // passa a url e o usuario que vai alterar
    return this.http.put(`${this.url}/${usuario.id}`,usuario);
  }



}
