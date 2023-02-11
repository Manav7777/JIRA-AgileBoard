import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  img:string;
  inputFileds:any;
  constructor(private loginService:LoginService) {
    this.img = `${environment.APP_IMAGE_URL}assets/img/artisain.png`
    this.inputFileds = loginService.loginInputs();
  }

  ngOnInit(): void {
    
  }

}
