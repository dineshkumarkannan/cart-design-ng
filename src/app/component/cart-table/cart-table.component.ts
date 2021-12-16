import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/type/cart-items';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
})
export class CartTableComponent implements OnInit {
  @Input() items: Item[] = [];
  constructor() {}

  ngOnInit(): void {}
}
