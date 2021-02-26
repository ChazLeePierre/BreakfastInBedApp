import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {
  _baseURL: string = "api/Breakfast";

  constructor(private http: HttpClient) { }

  getPlatterItems() {
    return this.http.get<PlatterItem[]>(`${this._baseURL}/GetPlatterItems`);
  }
  getBeverageItems() {
    return this.http.get<BeverageItem[]>(`${this._baseURL}/GetBeverageItems`);
  }
  getDeliveryTimes() {
    return this.http.get<DeliveryTimes[]>(`${this._baseURL}/GetDeliveryTimes`);
  }
  addOrder(order: Order) {
    return this.http.post(`${this._baseURL}/AddOrder/`, order);
  }
}
