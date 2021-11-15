/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable no-trailing-spaces */
import { AlertController, ToastController } from '@ionic/angular';
import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaUsuarios: Usuario[] = [];

  constructor(
    private storageService: StorageService,
    private alertController: AlertController,
    private toastController: ToastController
    ) {}


  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  async excluir(email: string){
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Deseja realmente excluir este usuário?',
      buttons: [
        {
          text: 'Não excluir este usuário.',
          role: 'cancel',
          //cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, excluir este usuário.',
          handler: async () => {
            //console.log('Confirm Okay');
            await this.storageService.remove(email);
            this.apresentarToast('Usuário excluido com sucesso.','success');
            window.location.reload();
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

}
