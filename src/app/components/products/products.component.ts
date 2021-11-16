import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiService, private cart: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((val: any) => {
        Object.assign(val, { quantity: 1, total: val.price });
      });
    });
  }

  addtoCart(item: any) {
    this.cart.addtoCart(item);
  }
}
