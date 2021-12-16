import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/type/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any = {};
  @Output() addToCart = new EventEmitter<Products>();
  @Output() changeCartItem = new EventEmitter<Products>();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.data.cartCount = 1;
    this.addToCart.emit(this.data);
  }

  change(action: string) {
    if (action === 'ADD' && this.data.cartCount) {
      this.data.cartCount = this.data.cartCount + 1;
      this.changeCartItem.emit(this.data);
    } else if (action === 'DELETE' && this.data.cartCount) {
      this.data.cartCount = this.data.cartCount - 1;
      this.changeCartItem.emit(this.data);
    }
  }
}
