import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';

  items = [
    {
  description: "comprar carne",
  isCompleted: false
    },
    {
  description: "comprar carbon",
  isCompleted: true
    },
  {
  description: "prender fuego",
  isCompleted: false
  }
  ]

  addItem(newItem: any){
    this.items.push(
      {
        description: newItem.value,
        isCompleted: true
          }
    );
    newItem.value = '';
  }
  
  removeItem(i: any){
    this.items.splice(i,1);
  }
}
