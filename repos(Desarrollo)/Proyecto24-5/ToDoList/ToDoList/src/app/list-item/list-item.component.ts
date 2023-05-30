import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: any;
  @Input() index: any;

  @Output() removeItemClick = new EventEmitter()
  constructor(){ }

  changeState(item: any){
    item.isCompleted = !item.isCompleted;
  }

  removeItem(i: any){
    console.log(i);
    this.removeItemClick.emit(i);
  }
}
