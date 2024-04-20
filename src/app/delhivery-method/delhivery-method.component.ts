import { Component } from '@angular/core';

@Component({
  selector: 'app-delhivery-method',
  templateUrl: './delhivery-method.component.html',
  styleUrls: ['./delhivery-method.component.css']
})
export class DelhiveryMethodComponent {
  delhiveryMethods!: any[];

  delhiveryItem!: any;
  itemQuantity = 0;

  ngOnInit() {
      this.delhiveryMethods = [
          { name: 'Clothes', code: 'Fur' },
          { name: 'Shoes', code: 'Ele' },
      ];

  }
}
