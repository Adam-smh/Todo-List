import { Component, OnInit } from '@angular/core';
import { Item } from 'model/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoItem: string = "";
  public todoItems: Item[] = []; // focus
  // public todoitemId: number[] = [];

  public itemList: string = "";
  public itemListA: Item[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }

  updateList() { // needs to be enhanced
    var newItem = new Item(this.todoItem, "");
    this.itemListA.push(newItem);

    this.todoItem = '';
  }

  addSubItem(index: any){
    debugger
    // this.itemListA[index].subItem.push(this.itemList);
  }

  delete(){
    this.todoItem
  }
}

