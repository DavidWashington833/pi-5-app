import { PipesModule } from './../../pipes/pipes.module';
import { MaskCpfPipe } from './../../pipes/mask-cpf/mask-cpf';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterProviderPage } from './register-provider';

@NgModule({
  declarations: [
    RegisterProviderPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(RegisterProviderPage),
  ]
})
export class RegisterProviderPageModule {}
