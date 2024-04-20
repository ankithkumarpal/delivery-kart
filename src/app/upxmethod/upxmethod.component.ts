import { Component  , Input, OnChanges} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryDataService } from '../delivery-data.service';

@Component({
  selector: 'app-upxmethod',
  templateUrl: './upxmethod.component.html',
  styleUrls: ['./upxmethod.component.css']
})
export class UPXMethodComponent  {
  @Input() index!: number;
  UPXMethods!: any[];
  UPXItem!: any;
  itemQuantity = 0;
  showItems = false;
  deleviryItems! : any [];
  totalDeliveries! : any [];

  constructor(private readonly deliveryDataService : DeliveryDataService){}



  ngOnInit() {
      this.UPXMethods = [
          { name: 'Furnitures', code: 'Fur' },
          { name: 'Electronic', code: 'Ele' },
      ];
      this.deliveryDataService.getItems().subscribe((data: any[]) => {
        this.totalDeliveries = data;
        console.log(this.totalDeliveries);
      });
  }

  onSave() {
    this.deliveryDataService.getItems().subscribe((data : any[]) => {
      console.log('Data received in parent:', data);
    });
  }
}
