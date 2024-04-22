import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import
{
BrowserAnimationsModule
}
from
'@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IPLModule } from './ipl/ipl.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CommonModule } from '@angular/common';
import { commonComponentModule } from './Common/common-component.module';
import { SearchBoxComponent } from './Common/search-box/search-box.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    IPLModule,
    DeliveryModule,
    commonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
