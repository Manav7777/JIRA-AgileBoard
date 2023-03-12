import { Component, OnInit } from '@angular/core';
import { PrimeModalService } from './prime-modal/prime-modal.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
  isModalOpen = false;
  constructor(private modalService:PrimeModalService) { }

  ngOnInit(): void {
    
  }

}
