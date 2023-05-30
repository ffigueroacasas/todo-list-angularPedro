import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  @Input() items: any;

  @Output() addNewItem = new EventEmitter();


  addItem(newItem: any){
    this.addNewItem.emit(newItem);
  }
}
