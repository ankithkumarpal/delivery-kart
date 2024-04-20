import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';

interface Item  {
  [key: string]: string | Number,
  name : string ,
  weight : Number ,
  quantity : Number
  total :Number,
  totalAmount : Number
}

interface data {
   method : string ,
   itemType : string ,
   items : Item []
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {

  private dataSubject: BehaviorSubject<data []> = new BehaviorSubject<data []>([{method:'' , itemType:'' , items : [{ name: '', weight: 0, quantity: 0 , total: 0 , totalAmount:0 }]}]);

  constructor() { }

  addItem(methodIndex : number , item: any): void {
    this.dataSubject.value[methodIndex].items= [...this.dataSubject.value[methodIndex].items , item];
    this.dataSubject.next(this.dataSubject.value);
  }

  updateItem(methodIndex : number , row : number , field : string , value : string | number) {
    this.dataSubject.value[methodIndex].items[row][field] = value;
    this.dataSubject.next(this.dataSubject.value);
  }

  removeItem(methodIndex : number , itemIndex : number){
    const currentItems = this.dataSubject.value[methodIndex].items;
    currentItems.splice(itemIndex , 1);
    this.dataSubject.value[methodIndex].items = currentItems;
    this.dataSubject.next(this.dataSubject.value);
  }

  getItems(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  addDelivery(data : any){
    this.dataSubject.value.push(data);
    this.dataSubject.next(this.dataSubject.value);
  }

  removeDelivery(methodIndex : number){
    this.dataSubject.value.splice(methodIndex , 1);
    this.dataSubject.next(this.dataSubject.value);
  }

}
