import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import {MenuItem, PrimeNGConfig,MessageService} from 'primeng/api';


@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  providers: [MessageService]

})
export class ProfileMenuComponent implements OnInit {
  profileMenuList:MenuItem[];
  isMenuOpen = false;
  constructor(private commonService:CommonService,private primengConfig: PrimeNGConfig) { 
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.profileMenuList = this.commonService.getProfileMenu();
  }
  // toogleProfileMenu(){
  //   this.isMenuOpen = !this.isMenuOpen
  // }

}
