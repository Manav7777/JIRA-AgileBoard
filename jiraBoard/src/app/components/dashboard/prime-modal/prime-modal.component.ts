import { Component, OnInit,Input } from '@angular/core';
import { PrimeModalService } from './prime-modal.service';

@Component({
  selector: 'app-prime-modal',
  templateUrl: './prime-modal.component.html',
  styleUrls: ['./prime-modal.component.scss'],
})
export class PrimeModalComponent implements OnInit {
  @Input('visible') visible =false;
  constructor(private modalService:PrimeModalService) { }

  ngOnInit(): void {
    console.log(this.modalService.modal)
  }
  close() {
    this.modalService.close();
  }

}
