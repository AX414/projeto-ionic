import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/iFilme.model'; //modelo dos filmes
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Filmes';
  listaFilmes: IFilme[] = [
    {
      nome: 'A Viagem de Chihiro',
      lancamento: '20/07/2001',
      duracao: '2h 6m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bNBXskBHOwPSW21o7iT3N8QVg9L.jpg',
      generos: ['Animação', 'Família', 'Fantasia'],
      pagina: '/chihiro',
    },
    {
      nome: 'O Serviço de Entregas da Kiki',
      lancamento: '31/12/1998',
      duracao: '1h 43m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jM0mvPmmmKLDyV1cbs5hg0OKIzN.jpg',
      generos: ['Animação', 'Família', 'Fantasia', 'Aventura'],
      pagina: '/kiki',
    },
    {
      nome: 'Meu amigo Totoro',
      lancamento: '13/07/1990',
      duracao: '1h 27m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jHo6W1gkDbcFx5gAS8PuJnqXHge.jpg',
      generos: ['Animação', 'Família', 'Fantasia'],
      pagina: '/totoro',
    }
  ]; //coleção de filmes

  constructor(public alertController: AlertController,
              public toastController: ToastController,
              public dadosService: DadosService,
              public route: Router) { }

    exibirFilme(filme: IFilme){
      /*Guardando o filme no serviço de dados*/
      this.dadosService.guardarDados('filme',filme);
      this.route.navigateByUrl('/dados-filme');
    }

    async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          //cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            //console.log('Confirm Okay');
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
