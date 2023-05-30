import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
  items = [
    {
      description: "Comprar carne",
      isCompleted: false
    },
    {
      description: "Comprar carbón",
      isCompleted: true
    },
    {
      description: "Prender fuego",
      isCompleted: false
    }
  ];



  addItem(newItem: any) {
    this.items.push(
      {
        description: newItem.value,
        isCompleted: false
      }
    )
    newItem.value = "";
  }

  removeItem(i: any) {
    this.items.splice(i, 1);
  }
}
