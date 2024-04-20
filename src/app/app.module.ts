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
import { UPXMethodComponent } from './upxmethod/upxmethod.component';
import { DelhiveryMethodComponent } from './delhivery-method/delhivery-method.component';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { ItemsComponent } from './items/items.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    UPXMethodComponent,
    DelhiveryMethodComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
