import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ResponseProvider } from './../../models/ResponseProvider';
import { PrestadorProvider } from './../../providers/prestador/prestador';
import { RequestPage } from '../request/request';
import { DetailUserPage } from '../detail-user/detail-user';
import { Prestador } from '../../models/prestador';
import { DetailProviderPage } from '../detail-provider/detail-provider';
import { SearchPage } from '../search/search';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ResponseUser } from '../../models/ResponseUser';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';
import { PositionProvider } from '../../providers/position/position';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  styleMap: any = [
    {
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#e0efef"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          hue: "#1900ff"
        },
        {
          color: "#c0e8e8"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          lightness: 100
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        },
        {
          lightness: 700
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#7dcdcd"
        }
      ]
    }
  ];
  providers: Array<Prestador> = [];
  latitude: number | string = -23.669922;
  longitude: number | string = -46.700162;

  constructor(
    private alertProvider: AlertProvider,
    private navCtrl: NavController,
    private navParams: NavParams,
    private usuarioProvider: UsuarioProvider,
    private prestadorProvider: PrestadorProvider,
    private httpClient: HttpClient,
    private events: Events,
    private userStorage: UserStorageProvider,
    private positionProvider: PositionProvider
  ) {}

  ionViewDidLoad() {
    // this.httpClient
    //   .get('/assets/json/map.json')
    //   .subscribe(
    //     styleMap => this.styleMap = styleMap,
    //     err => console.log('erro ao carregar styleArray', err)
    //   );

    this.getUser();

    this.getUserProvider();

    // this.positionProvider
    //   .getUserPosition()
    //   .subscribe(
    //     position => {
    //       const {longitude, latitude} = position.coords;
    //       this.setPostion(longitude, latitude);
          this.getProviders()
            .subscribe(providers =>
                this.providers =
                  providers
                    .filter(p => p.idUsuario !== Number(this.navParams.get('userId')))
                    .map(p => this.buildPrestador(p)),
              error => console.log(error)
            );
      //   },
      //   err => console.log('erro ao pegar posição do usuário', err)
      // );
  }

  getProviders() {
    return this.prestadorProvider
      .getForCoords(this.latitude, this.longitude);
  }

  buildPrestador(responseProvider: ResponseProvider) {
    const provider = new Prestador();
    provider.icon = 'assets/imgs/employees.png';
    provider.id = responseProvider.idPrestador;
    provider.latitude = Number(responseProvider.latitudePrestador);
    provider.longitude = Number(responseProvider.longitudePrestador);
    return provider;
  }

  setPostion(longitude: string | number, latitude: string | number): void {
    // this.longitude = longitude;
    // this.latitude = latitude;
  }

  getUser() {
    this.usuarioProvider
      .get(this.navParams.get('userId'))
      .subscribe(user => {
        this.userStorage.setUser(user);
        this.publishLoadUser(this.userStorage.getUser());
      }, err => console.error('erro ao buscar usuário', err));
  }

  getUserProvider() {
    this.prestadorProvider
      .getForUser(this.navParams.get('userId'))
      .subscribe(provider => {
        this.userStorage.setProvider(provider);
        this.publishLoadProvider(provider);
      }, err => console.error('erro ao buscar prestador', err));
  }

  publishLoadProvider(provider: ResponseProvider) {
    this.events.publish('provider:load', provider);
  }

  publishLoadUser(user: ResponseUser) {
    this.events.publish('user:load', user);
  }

  openDetailProvider(id: number) {
    this.navCtrl.push(DetailProviderPage.name, { id: id });
  }

  openDetailUser() {
    this.navCtrl.push(DetailUserPage.name);
  }

  openRequest() {
    this.navCtrl.push(RequestPage.name);
  }

  openSearch() {
    this.navCtrl.push(SearchPage.name);
  }

}
