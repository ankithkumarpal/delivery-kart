import { Component, Input } from '@angular/core';
import { DeliveryDataService } from '../delivery-data.service';

@Component({
  selector: 'app-delhivery-method',
  templateUrl: './delhivery-method.component.html',
  styleUrls: ['./delhivery-method.component.css']
})
export class DelhiveryMethodComponent {
  @Input() index!: number;

  delhiveryMethods!: any[];

  delhiveryItem!: any;
  itemQuantity = 0;
  totalDeliveries! : any [];

  constructor(private readonly deliveryDataService : DeliveryDataService){}

  ngOnInit() {
      this.delhiveryMethods = [
          { name: 'Clothes', code: 'Fur' },
          { name: 'Shoes', code: 'Ele' },
      ];

      this.deliveryDataService.getItems().subscribe((data : any)=>{
        this.totalDeliveries = data;
      })
  }
}
