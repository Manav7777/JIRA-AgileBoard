import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  inputs:any;
  constructor() { }
  loginInputs(){
   return this.inputs = [
      {
        name:'Email',
        type:'email',
        placeholder:'Enter email..',
        require: true,
        class:'form-control input',
        formControlName:'email',
        label:'Email'
      },
      {
        name:'Password',
        type:'password',
        placeholder:'Enter password..',
        require: true,
        class:'form-control input',
        formControlName:'password',
        label:'Password'
      },
    ]
  }
}
