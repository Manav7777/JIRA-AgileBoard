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
    this.commonService.getProfileMenu().subscribe((data)=>{
      data.ProfileMenu[2].command=()=>{this.logout()}
      this.profileMenuList = data.ProfileMenu
    })
  }
  logout(){
    this.commonService.logout();
  }
}
