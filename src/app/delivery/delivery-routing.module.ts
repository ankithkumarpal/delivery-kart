import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryMainComponent } from './delivery-main/delivery-main.component';

const route : Routes = [
  {path : '' ,component : DeliveryMainComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports : [RouterModule]
})
export class DeliveryRoutingModule { }
