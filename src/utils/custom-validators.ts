import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators extends Validators {
  static confirmPassward(control: AbstractControl): ValidationErrors | null {
    if (control.parent != undefined) {
      let confirmPassward = control.value;
      let passward = control.parent.value.senha;
      return passward == confirmPassward ? null : { key: 'invalid password' };
    }
    return { key: 'invalid password' }
  }

  static cpf(control: AbstractControl): ValidationErrors | null {
    let cpf = control.value.replace(/[^0-9]/g, '');
    return CustomValidators.isCPF(cpf) ? null : { key: 'invalid CPF' };
  }

  static tel(control: AbstractControl): ValidationErrors | null {
    let cpf = control.value.replace(/[^0-9]/g, '');
    return CustomValidators.isTel(cpf) ? null : { key: 'invalid Tel' };
  }

  private static isTel(tel: string) {
    return tel.length == 11;
  }

  private static isCPF(cpf: string) {
    let sum = 0;
    let rest;
    if (
      cpf == '00000000000' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}

