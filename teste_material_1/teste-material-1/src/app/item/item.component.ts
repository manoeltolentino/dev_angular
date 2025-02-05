import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule }  from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatTableModule, MatIconModule, FormsModule], 
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  items: Item[] = [];
  item: Item = { id: 0, name: '', description: ''};
  displayedColumns: string[] = ['name', 'description', 'actions'];
  

  constructor(private itemService: ItemService){
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe(items => this.items = items);

    console.log(this.items);

  }


  onSubmit(): void{
    if (this.item.id){
      this.itemService.updateItem(this.item);
    }
    else{
      this.itemService.addItem(this.item);
    }

    this.resetForm();
    this.getItems();

    console.log(this.items);

    

  }

  editItem(item: Item): void{

    //this.itemService.updateItem(item);

    this.item = {...item};
    
    //this.getItems();
  }

  deleteItem(id: number): void{

    this.itemService.deleteItem(id);

    this.getItems();

  }

  resetForm(): void{
    this.item = { id: 0, name: '', description: ''};
  }

}
