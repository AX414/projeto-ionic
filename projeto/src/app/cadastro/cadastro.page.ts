/* eslint-disable @typescript-eslint/member-ordering */
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { comparaValidator } from './../validators/senha-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();

  mensagens = {
    nomeLogin: [
      { tipo: 'required', mensagem: 'O campo nome de login é obrigatório!' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo email é obrigatório!' },
      { tipo: 'email', mensagem: 'O campo email precisa ser um email válido!' }
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo senha é obrigatório!' },
      { tipo: 'minLength', mensagem: 'A senha deve ter pelo menos 6 caractéres!' }
    ],
    confirmarSenha: [
      { tipo: 'required', mensagem: 'O campo de confirmar senha é obrigatório!' },
      { tipo: 'comparacao', mensagem: 'As senhas não conferem!' },
    ]

  };

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: Router,
    private toastController: ToastController) {
    this.formCadastro = this.formBuilder.group({
      nomeLogin: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmarSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
      validator: comparaValidator('senha', 'confirmarSenha')
    }); //recebe o objeto de estrutura do formulário
  }

  ngOnInit() {
  }

  async cadastrar() {
    console.log('Formulário: ', this.formCadastro.valid);
    if (this.formCadastro.valid) {
      this.usuario.nomeLogin = this.formCadastro.value.nomeLogin;
      this.usuario.email = this.formCadastro.value.email;
      this.usuario.senha = this.formCadastro.value.senha;
      await this.storageService.set(this.usuario.email, this.usuario); // passa a chave primeiro
      this.route.navigateByUrl('/tabs/tab2');
    } else {
      this.apresentarToast('Formulário Inválido!', 'danger');
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
