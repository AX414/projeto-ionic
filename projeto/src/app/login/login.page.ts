import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/usuario';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  mensagens = {
    nomeLogin: [
      {tipo: 'required', mensagem: 'O campo nome de login é obrigatório!'},
    ],
    senha: [
      {tipo: 'required', mensagem: 'O campo senha é obrigatório!'},
      {tipo: 'minLength', mensagem: 'A senha deve ter pelo menos 6 caractéres!'}
    ]
    };

    listaUsuarios: Usuario[] = [];

  constructor(
    private route: Router,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private storageService: StorageService
    ) {
    this.formLogin = this.formBuilder.group({
      nomeLogin: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }); //recebe o objeto de estrutura do formulário
  }


  ngOnInit() {
    this.buscarUsuarios();
  }

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

login() {
    console.log('Formulário: ',this.formLogin.valid);
      if (this.formLogin.value.nomeLogin === 'adm' && this.formLogin.value.senha === 'adm123') {
        this.route.navigateByUrl('/tabs/tab1');
        this.apresentarToast('Seja bem-vindo!', 'success');
      } else {
        this.apresentarToast('Dados Inválidos!', 'danger');
      }
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
