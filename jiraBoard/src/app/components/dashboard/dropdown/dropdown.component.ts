import { Component, Input, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('options') List;
  constructor() { }

  ngOnInit(): void {
    console.log('options',this.List)
  }

}
