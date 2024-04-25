import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Output() pagination: EventEmitter<any> = new EventEmitter<any>();

  @Input() filteredData!: any[];
  @Input() totalRecords!: number;
  @Input() cols!:any[];

  first: number = 0;
  rows: number = 5;

  constructor() {}

  ngOnInit() {
    this.pagination.emit({offSet : this.first , limit : this.rows});
  }

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
      this.pagination.emit({offSet : this.first , limit : this.rows});
  }

}
