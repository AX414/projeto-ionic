import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=1349533ccb10d11c1c39f3935086c536';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;
    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

    /*Método para tratamento de erros da API*/
    async exibirErro(erro) {
      const toast = await this.toastController.create({
        message: 'Erro ao consultar a API.',
        duration: 2000,
        color: 'danger',
        position: 'middle'
      });
      toast.present();
      return null;
    }

}
