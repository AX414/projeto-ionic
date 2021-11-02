import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string;
  senha: string;

  constructor(private route: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

  /*
  login(){
    if(this.email === 'admin@hotmail.com' && this.senha === '123'){
      this.route.navigateByUrl('/tabs/tab1');
      this.apresentarToast('Seja bem-vindo!','success');
    }else{
      this.apresentarToast('Dados Inválidos!','danger');
    }
  }
*/

  async apresentarToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

}
