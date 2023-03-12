import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';
import { PrimeModalService } from '../prime-modal/prime-modal.service';

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
  constructor(public commonService: CommonService,private modalService:PrimeModalService) {
    this.logoImg = `${environment.APP_IMAGE_URL}assets/img/logo.png`;
    this.AllApps = `${environment.APP_IMAGE_URL}assets/img/allApps.png`;
    this.arrowImg = `${environment.APP_IMAGE_URL}assets/img/arrow.png`;
  }

  ngOnInit(): void {
    this.modalService.modal.subscribe(
      (modal) => (this.isModalOpen = modal)
    );
  }
  createTask(){
    this.modalService.open()
    if(this.isModalOpen){
      this.createTasks = 'Task'
    }
  }
}
