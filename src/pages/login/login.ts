import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private email: string;
  private senha: string;

  constructor(private _navCtrl: NavController) {}

  logar() {}

  cadastrar() {
    this._navCtrl.push(CadastroPage.name);
  }

}
