import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public items = false;
  public product: any = [];
  public gtotal = 0;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getProduct().subscribe((res) => {
      this.product = res;
      this.gtotal = this.cart.gettotalPrice();
    });
  }
  removeItem(item: any) {
    this.cart.removeCartItem(item);
  }
  empty(){
    this.cart.removeAllCart()
  }
}
