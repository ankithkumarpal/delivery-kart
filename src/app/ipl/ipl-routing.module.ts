import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IplScreeningComponent } from './ipl-screening/ipl-screening.component';



const Route : Routes = [
  {path : '' , component: IplScreeningComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forChild(Route)
  ],
  exports : [RouterModule]
})
export class IplRoutingModule { }
