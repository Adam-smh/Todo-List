import { Component, OnInit } from '@angular/core';
import { Item } from 'model/item';
// import { title } from 'process';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoItem: string = "";
  public todoItems: Item[] = []; // focus
  // public todoitemId: number[] = [];

  // public index = 0;
  public itemList: string = "";
  public itemListA: Item[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
  }

  updateList() { // needs to be enhanced
    var newItem = new Item(this.todoItem, []);
    this.itemListA.push(newItem);

    this.todoItem = "";
  }

  addSubItem(index: any){
    this.itemListA[index++].subItem.push(this.itemList);
  }

  deleteAll(){
    this.itemListA = [];


    // var delItem = new Item(this.todoItems, []);
    // this.todoItems.push(delItem)
   
    // delete this.todoItems[this.index];

    // const index = this.todoItems.indexOf(this.index, 0);
    // if (index > -1) {
    //   this.todoItems.splice(index, 1);
    // }
  }
}

