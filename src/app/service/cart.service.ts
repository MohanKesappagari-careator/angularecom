import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProduct() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.gettotalPrice();
    console.log(this.cartItems);
  }
  gettotalPrice(): number {
    let gtotal = 0;
    this.cartItems.map((val: any) => (gtotal += val.total));
    return gtotal;
  }
  removeCartItem(product: any) {
    this.cartItems.map((val: any, index: any) => {
      if (product.id === val.id) {
        this.cartItems.splice(index, 1);
      }
    });
    this.productList.next(this.cartItems);
  }
  removeAllCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}
