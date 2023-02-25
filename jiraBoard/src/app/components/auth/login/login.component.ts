import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../common/spiner/loading.service';
import { LoginService } from '../login.service';
import Routes from 'src/app/Route';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  img: string;
  inputFileds: any;
  isSignUp = false;
  authForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.img = `${environment.APP_IMAGE_URL}assets/img/artisain.png`;
    if (router.url === '/register') {
      this.isSignUp = true;
    }
    if (!this.isSignUp) {
      this.inputFileds = this.loginService.loginInputs();
    } else {
      this.inputFileds = [];
      this.inputFileds = this.loginService.signUpInputs();
    }
  }
  ngOnInit(): void {
    if (!this.isSignUp) {
      this.authForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    } else {
      this.authForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required,Validators.email],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      });
    }
  }
  get register() {return this.authForm.controls;}
  submit() {
    this.loadingService.showLoader();
    console.log('form-login', this.authForm);
  }
  signUp() {
    this.isSignUp = true;
    this.loginService.goTOsignUp();
  }
  backtoLogin() {
    this.isSignUp = false;
    this.loginService.goTOsignIn();
  }
}
