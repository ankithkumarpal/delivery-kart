import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import
{
BrowserAnimationsModule
}
from
'@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { IPLModule } from './ipl/ipl.module';
import { DeliveryModule } from './delivery/delivery.module';
import { commonComponentModule } from './Common/common-component.module';
import { SearchBoxComponent } from './Common/search-box/search-box.component';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    IPLModule,
    DeliveryModule,
    commonComponentModule,
    TableModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
