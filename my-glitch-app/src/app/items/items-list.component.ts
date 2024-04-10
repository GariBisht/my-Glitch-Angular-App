import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemService } from './items.service';

@Component({
  template: `
    <h3 highlight>Items List</h3>
    <div *ngFor='let item of items | async'>
      <a routerLink="{{'../' + item.id}}" style="text-decoration: none; color: rgb(30,15,63);">ItemID - {{item.id}}  <br> ItemName -{{item.name}} </a>
    </div>
  `
})
export class ItemsListComponent {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

}

