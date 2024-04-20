import { Component, Input, Output } from '@angular/core';
import { DeliveryDataService } from '../delivery-data.service';


interface Item  {
  name : string ,
  weight : Number ,
  quantity : Number
  total :Number,
  totalAmount : Number
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {
  @Input() methodIndex! : number

  totalItems = [{ name: '', weight: '', quantity: '' , total:0 , totalAmount : 0}];
  name!: string ;
  weight! : number;
  quantity! : number;


  constructor(private readonly deliveryDataService  : DeliveryDataService){}

  addItem(){
    this.deliveryDataService.addItem(this.methodIndex , { name: '', weight: '', quantity: '' , total: 0 , totalAmount:0 });
    this.deliveryDataService.getItems().subscribe((data: any[]) => {
      this.totalItems = data[0].items;
    });
  }

  onInputchange(row : number , feild : string , value : string | number) {
    this.deliveryDataService.updateItem(this.methodIndex  , row , feild , value);
    this.deliveryDataService.getItems().subscribe((data: any[]) => {
      this.totalItems = data[0].items;
      console.log(data)
    });
  }

  removeItem(index : number){
    this.deliveryDataService.removeItem(this.methodIndex , index);
    this.deliveryDataService.getItems().subscribe((data: any[]) => {
      this.totalItems = data[0].items;
       console.log(data);
    });
  }
}
