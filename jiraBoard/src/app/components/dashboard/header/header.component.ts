import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImg:any;
  AllApps:any;
  arrowImg:any;
  constructor(public commonService: CommonService) {
    this.logoImg = `${environment.APP_IMAGE_URL}assets/img/logo.png`;
    this.AllApps = `${environment.APP_IMAGE_URL}assets/img/allApps.png`;
    this.arrowImg = `${environment.APP_IMAGE_URL}assets/img/arrow.png`;
  }

  ngOnInit(): void {
    // console.log('menu',this.commonService.setMenu())
  }
}
