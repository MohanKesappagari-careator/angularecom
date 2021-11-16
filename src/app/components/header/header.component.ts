import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public total = 0;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getProduct().subscribe((res: any) => {
      this.total = res.length;
    });
  }
}
