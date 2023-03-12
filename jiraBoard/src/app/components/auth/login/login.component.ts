import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../common/spiner/loading.service';
import { LoginService } from '../login.service';
import Routes from 'src/app/Route';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
  loginForm: FormGroup;
  isSubmited = false;
  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.img = `${environment.APP_IMAGE_URL}assets/img/artisain.png`;
    if (router.url === Routes.AUTH.REGISTER) {
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
    this.redirect();
    if (!this.isSignUp) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
    } else {
      this.authForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      });
    }
  }
  submit() {
    this.isSubmited = true;
    if (this.isSignUp) {
      if (this.authForm.status === 'VALID') {
        this.loginService.register(this.authForm.value);
      }
    } else {
      if (this.loginForm.status === 'VALID') {
        this.loginService.Login(this.loginForm.value);
        this.redirect();
      }
    }
  }
  redirect() {
   setTimeout(()=>{
    var AuthToken = localStorage.getItem('token');
    console.log('Auth',AuthToken)
    if (AuthToken) {
      this.router.navigate([Routes.DASHBOARD.DASH_BOARD])
    }
   },200)
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
