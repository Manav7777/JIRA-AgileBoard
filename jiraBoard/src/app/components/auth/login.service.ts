import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../common/spiner/loading.service';
import Routes from 'src/app/Route';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  inputs: any;
  constructor(private loadingService: LoadingService, private router: Router,private http:HttpClient,    private messageService:MessageService
    ) {}
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
        placeholder: 'Enter confirm password..',
        require: true,
        class: 'form-control input',
        formControlName: 'confirmPassword',
        label: 'Confirm Password',
      },
    ]);
  }
  goTOsignUp() {
    this.loadingService.showLoader();
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.router.navigate([Routes.AUTH.REGISTER]);
    }, 1000);
  }
  goTOsignIn() {
    this.loadingService.showLoader();
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.router.navigate([Routes.AUTH.LOGIN]);
    }, 1000);
  }
  register(obj) {
    return this.http.post(environment.API_URL + Routes.AUTH.REGISTER,obj).subscribe((response:any)=>{
      if(response.token){
        this.messageService.add({severity:'success', summary:'Register', detail:'Successfully Registered'})
      }else{
        this.messageService.add({severity:'error', summary:'Register', detail:'Something wents worng'})
      }
    })
  }
}
