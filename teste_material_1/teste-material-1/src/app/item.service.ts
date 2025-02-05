import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1'},
    { id: 2, name: 'Item 2', description: 'Description 2'},
  ]

  constructor() { }

  getItems(): Observable<Item[]>{

    return of(this.items);
  }

  getItem(id: number): Observable<Item>{
    const item = this.items.find(i => i.id === id);
    return of(item!);
  }

  addItem(item: Item): void{
    this.items.push({...item, id: this.items.length + 1});
  }

  updateItem(updatedItem: Item): void{
    const index = this.items.findIndex(i => i.id === updatedItem.id);

    if (index !== -1){
      this.items[index] = updatedItem;
    }

  }

  deleteItem(id: number): void{
    this.items = this.items.filter(i => i.id !== id);
  }
}
