import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IplRoutingModule } from './ipl-routing.module';
import { IplScreeningComponent } from './ipl-screening/ipl-screening.component'
import { commonComponentModule } from '../Common/common-component.module';


@NgModule({
  declarations: [
    IplScreeningComponent
  ],
  imports: [
    CommonModule,
    IplRoutingModule,
    commonComponentModule
  ]
})
export class IPLModule { }
