import { Component } from '@angular/core';
import { CartItems, Item } from './type/cart-items';
import { Products } from './type/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cart-design-ng';

  data: Products[] = [];
  cartItems: CartItems = {
    items: [],
  };

  ngOnInit() {
    this.data = this.items;
  }

  addToCart(val: Products) {
    let item: Item = {
      name: val.name,
      count: val.cartCount,
      id: val.id,
    };
    this.cartItems.items.push(item);
  }
  changeCartItem(val: Products) {
    if (val.cartCount === 0) {
      this.cartItems.items.splice(
        this.cartItems.items.findIndex((v) => v.id === val.id),
        1
      );
    } else {
      this.cartItems.items.map((v) => {
        if (v.name === val.name) {
          v.count = val.cartCount;
        }
      });
    }
  }

  items: Products[] = [
    {
      id: 1,
      name: 'bottle',
      img: 'bottle',
      cartCount: 0,
    },
    {
      id: 2,
      name: 'cycle',
      img: 'cycle',
      cartCount: 0,
    },
    {
      id: 3,
      name: 'hat',
      img: 'hat',
      cartCount: 0,
    },
    {
      id: 4,
      name: 'note, pen',
      img: 'note_pen',
      cartCount: 0,
    },
    {
      id: 5,
      name: 'shoe',
      img: 'shoe',
      cartCount: 0,
    },
    {
      id: 6,
      name: 'toy',
      img: 'toy',
      cartCount: 0,
    },
    {
      id: 7,
      name: 'ring',
      img: 'ring',
      cartCount: 0,
    },
  ];
}
