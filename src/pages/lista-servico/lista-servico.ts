import { CadastroServicoPage } from './../cadastro-servico/cadastro-servico';
import { DetalheServicoPage } from './../detalhe-servico/detalhe-servico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {

  constructor(
    private _navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaServicoPage');
  }

  detalheServico() {
    this._navCtrl.push(DetalheServicoPage.name);
  }

  cadastrar() {
    this._navCtrl.push(CadastroServicoPage.name);
  }

}