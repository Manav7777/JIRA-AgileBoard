import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public commonService:CommonService,private router:Router) { }

  ngOnInit(): void {

  }
  activeLink(obj){
    console.log('obj',obj)
  }

}
