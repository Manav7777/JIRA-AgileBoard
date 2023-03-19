import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import Routes from 'src/app/Route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive;
  sidebarMenu:any;
  constructor(public commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.commonService.setSideBar().subscribe((sidemenu)=>{
      this.sidebarMenu = sidemenu.SidebarMenu;
    })
    if(localStorage.getItem('active')){
      this.isActive = localStorage.getItem('active');
      console.log(this.isActive)
      setTimeout(()=>{
        if(this.router.url === Routes.DASHBOARD.DASH_BOARD){
          localStorage.removeItem('active');
        }
      },500)
    }
  }
  goToPage(obj){
    console.log('obj',obj)
    if(obj.route_link){
      if(this.router.url === '/'+obj.route_link){
        localStorage.setItem('active',obj.id)
      }else{
        localStorage.removeItem('active');
      }
      this.isActive = obj.id
      this.router.navigate([obj.route_link])
    }
  }
}
