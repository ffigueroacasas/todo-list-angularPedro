import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() item: any;
  @Input() index: any;

  @Output() removeItemClick = new EventEmitter()
  constructor() { }

  changeState(item: any) {
    item.isCompleted = !item.isCompleted;
  }

  removeItem(i: any) {
    console.log(i);
    this.removeItemClick.emit(i);
  }

}
