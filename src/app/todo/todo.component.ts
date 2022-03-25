import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title!: string;

  todoItem!: string;
  todoItems: Array<string> = []; // focus

  todoItem2!: string;
  todoItems2: Array<string> = []; // focus

  constructor() {
  }
  
  ngOnInit(): void {
  }

  updateList() { // needs to be enhanced

    this.todoItems.push(this.todoItem);
    this.todoItem = '';
  }

  updateList2() { // needs to be enhanced

    this.todoItems2.push(this.todoItem2);
    this.todoItem2 = '';
  }
}
