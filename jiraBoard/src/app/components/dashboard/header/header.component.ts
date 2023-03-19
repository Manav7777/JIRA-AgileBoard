import { Component,Inject, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';
import { PrimeModalService } from '../prime-modal/prime-modal.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImg:any;
  AllApps:any;
  arrowImg:any;
  isModalOpen = false;
  createTasks:string;
  menus:any;
  isFullSize = false;
  element:any
  constructor(@Inject(DOCUMENT) private document: any,public commonService: CommonService,private modalService:PrimeModalService) {
    this.logoImg = `${environment.APP_IMAGE_URL}assets/img/logo.png`;
    this.AllApps = `${environment.APP_IMAGE_URL}assets/img/allApps.png`;
    this.arrowImg = `${environment.APP_IMAGE_URL}assets/img/arrow.png`;
  }

  ngOnInit(): void {
    this.modalService.modal.subscribe(
      (modal) => (this.isModalOpen = modal)
    );
    this.commonService.setMenu().subscribe((headers)=>{
      this.menus = headers.HeaderMenu;
    })
    this.element = document.documentElement
  }
  createTask(){
    this.modalService.open()
    if(this.isModalOpen){
      this.createTasks = 'Task'
    }
  }
  fullscreenToogle(){
    this.isFullSize = !this.isFullSize;
    if(this.isFullSize){
      if(this.element.requestFullscreen){
        this.element.requestFullscreen();
      }else if(this.element.mozRequestFullScreen){
        this.element.mozRequestFullScreen();
      }else if(this.element.webkitRequestFullscreen){
        this.element.webkitRequestFullscreen();
      }else if(this.element.msRequestFullscreen){
        this.element.msRequestFullscreen();
      }
    }else{
      if(document.exitFullscreen){
        this.document.exitFullscreen();
      }else if(this.document.mozRequestFullScreen){
        this.document.mozRequestFullScreen();
      }else if(this.document.webkitRequestFullscreen){
        this.document.webkitRequestFullscreen();
      }else if(this.document.msExitFullscreen){
        this.document.msExitFullscreen();
      }
    }
  }
}
