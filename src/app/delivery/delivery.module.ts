import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryMainComponent } from './delivery-main/delivery-main.component';
import { DelhiveryMethodComponent } from '../delhivery-method/delhivery-method.component';
import { UPXMethodComponent } from '../upxmethod/upxmethod.component';
import { ItemsComponent } from '../items/items.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    DeliveryMainComponent,
    UPXMethodComponent,
    DelhiveryMethodComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ]
})
export class DeliveryModule { }
