import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNewItemComponent } from './todo-new-item.component';

describe('TodoNewItemComponent', () => {
  let component: TodoNewItemComponent;
  let fixture: ComponentFixture<TodoNewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoNewItemComponent]
    });
    fixture = TestBed.createComponent(TodoNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
