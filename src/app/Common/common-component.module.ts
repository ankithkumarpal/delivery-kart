import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableComponent } from './table/table.component';

import {TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    SearchBoxComponent,
    TableComponent,
    FiltersComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  exports:[
    SearchBoxComponent ,
    TableComponent,
    FiltersComponent
  ]
})
export class commonComponentModule {}
