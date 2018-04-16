import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public text: string;

  constructor(
    private _navCtrl: NavController
  ) {}

  ionViewDidLoad() {}

  onCancel(event: Event) {}
  onInput(event: Event) {}
}