import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products: any = [
    {
      code: 'f230fh0g3',
      name: 'Bamboo',
      category: 'Watch Accessories',
      quantity: '24',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
