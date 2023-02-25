import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../common/spiner/loading.service';
import Routes from 'src/app/Route';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  inputs: any;
  constructor(private loadingService:LoadingService,private router:Router) {}
  loginInputs() {
    return (this.inputs = [
      {
        name: 'Email',
        type: 'email',
        placeholder: 'Enter email..',
        require: true,
        class: 'form-control input',
        formControlName: 'email',
        label: 'Email',
      },
      {
        name: 'Password',
        type: 'password',
        placeholder: 'Enter password..',
        require: true,
        class: 'form-control input',
        formControlName: 'password',
        label: 'Password',
      },
    ]);
  }
  signUpInputs() {
    return (this.inputs = [
      {
        name: 'Name',
        type: 'name',
        placeholder: 'Enter name..',
        require: true,
        class: 'form-control input',
        formControlName: 'name',
        label: 'Name',
      },
      {
        name: 'Email',
        type: 'email',
        placeholder: 'Enter email..',
        require: true,
        class: 'form-control input',
        formControlName: 'email',
        label: 'Email',
      },
      {
        name: 'Password',
        type: 'password',
        placeholder: 'Enter password..',
        require: true,
        class: 'form-control input',
        formControlName: 'password',
        label: 'Password',
      },
      {
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Enter password..',
        require: true,
        class: 'form-control input',
        formControlName: 'confirmPassword',
        label: 'Confirm Password',
      },
    ]);
  }
  goTOsignUp(){
    this.loadingService.showLoader();
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.router.navigate([Routes.AUTH.REGISTER]);
    }, 1000);
  }
  goTOsignIn(){
    this.loadingService.showLoader();
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.router.navigate([Routes.AUTH.LOGIN]);
    }, 1000);
  }
}
