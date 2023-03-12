import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class PrimeModalService {
  modal = new BehaviorSubject<boolean>(false);
  constructor() { }
  public open(){
    this.modal.next(true);
  }
  public close(){
    this.modal.next(false);
  }
}
