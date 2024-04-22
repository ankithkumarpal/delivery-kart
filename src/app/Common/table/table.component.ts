import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  products!: any[];

  cols!: any[];

  constructor() {}

  ngOnInit() {

    this.products = [{
      code : "code1",
      name : "name",
      category : "category",
      quantity : 2
    },
    {
      code : "code1",
      name : "name",
      category : "category",
      quantity : 2
    },{
      code : "code1",
      name : "name",
      category : "category",
      quantity : 2
    }
  ,{
    code : "code1",
    name : "name",
    category : "category",
    quantity : 2
  }]

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
  }

  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }

}
