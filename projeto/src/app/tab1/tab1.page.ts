import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from '../models/IFilme.API.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  title = 'Filmes';
  /*
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
*/

  listaFilmes: IListaFilmes;
  generos: string[] = [];

  constructor(public alertController: AlertController,
              public toastController: ToastController,
              public dadosService: DadosService,
              public filmeService: FilmeService,
              public route: Router,
              public generoService: GeneroService) { }

    buscarFilmes(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;

      if(busca && busca.trim()!== ''){
        this.filmeService.buscarFilmes(busca).subscribe(dados => {
          console.log(dados);
          //pega os dados e coloca em uma lista de filmes auxiliar
          this.listaFilmes = dados;
        });
      }
    }

    exibirFilme(filme: IFilmeApi){
      /*Guardando o filme no serviço de dados*/
      this.dadosService.guardarDados('filme',filme);
      this.route.navigateByUrl('/dados-filme');
    }

    async desconectar(){
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: 'Alerta!',
        message: 'Deseja desconectar?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            //cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sim, desconectar.',
            handler: () => {
              //console.log('Confirm Okay');
              this.apresentarToast('Usuário desconectado com sucesso.','success');
              this.route.navigateByUrl('/login');
            }
          }
        ]
      });

      await alert.present();
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
            this.apresentarToast('Filme adicionado aos favoritos.','success');
          }
        }
      ]
    });

    await alert.present();
    }

    async apresentarToast(texto: string, cor: string) {
      const toast = await this.toastController.create({
        message: texto,
        duration: 2000,
        color: cor
      });
      toast.present();
    }

    ngOnInit(){
      this.generoService.buscarGeneros().subscribe(dados =>{
        console.log('Generos', dados.genres);
        dados.genres.forEach(genero => {
          this.generos[genero.id] = genero.name;
        });
        this.dadosService.guardarDados('generos',this.generos);
      });
    };
}
