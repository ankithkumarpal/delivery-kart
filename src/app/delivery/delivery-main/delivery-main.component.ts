import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryDataService } from '../../delivery-data.service';

@Component({
  selector: 'app-delivery-main',
  templateUrl: './delivery-main.component.html',
  styleUrls: ['./delivery-main.component.css']
})
export class DeliveryMainComponent {
  title = 'shipping-kart';


  constructor(private readonly deliveryDataService : DeliveryDataService){}

  methods: any[] = [
    { name: 'UPX', code: 'UPX' },
    { name: 'Dehlivery', code: 'DH' },
  ];
  totalDeliveries! : any [];

  addDelivery() {
    this.deliveryDataService.addDelivery({method:'' , itemType:'' , items : [{ name: '', weight: 0, quantity: 0 , total: 0 , totalAmount:0 }]});
    this.deliveryDataService.getItems().subscribe((data: any[]) => {
      this.totalDeliveries = data;
      console.log(this.totalDeliveries);
    });
  }

  onSubmit() {
    console.log(this.totalDeliveries);
  }


  removeDelivery(i : number){
    this.deliveryDataService.removeDelivery(i);
  }

  saveDelivery(){
     this.deliveryDataService.getItems().subscribe((data : any)=>{
       console.log(data);
     })
  }
  ngOnInit() {
    this.deliveryDataService.getItems().subscribe((data: any[]) => {
      this.totalDeliveries = data;
    });
  }
}
