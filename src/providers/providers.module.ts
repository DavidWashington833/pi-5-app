import { NgModule } from '@angular/core';
import { UsuarioProvider } from './usuario/usuario';
import { AlertProvider } from './alert/alert';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { LoadingProvider } from './loading/loading';
import { EnderecoProvider } from './endereco/endereco';
import { PrestadorProvider } from './prestador/prestador';
import { LoginProvider } from './login/login';
import { GMapsServiceProvider } from './g-maps-service/g-maps-service';
import { DadosBancariosProvider } from './dados-bancarios/dados-bancarios';
import { ServicoProvider } from './servico/servico';
import { CategoriaProvider } from './categoria/categoria';
import { PedidoProvider } from './pedido/pedido';

@NgModule({
  declarations: [],
  providers: [
    UsuarioProvider,
    AlertProvider,
    UsuarioProvider,
    AlertProvider,
    LoadingProvider,
    EnderecoProvider,
    PrestadorProvider,
    LoginProvider,
    GMapsServiceProvider,
    DadosBancariosProvider,
    ServicoProvider,
    CategoriaProvider,
    PedidoProvider
  ]
})
export class ProvidersModule {}
