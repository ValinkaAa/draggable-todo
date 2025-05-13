import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface TodoItem{
  id: number;
  title: string;
  updateTime: string;
  priority: string;
}

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, DragDropModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList: TodoItem[] = [];
  inProgressList: TodoItem[] = [];
  doneList: TodoItem[] = [];

  constructor()
  {
    this.todoList = [{
      id: 1,
      title: "Learn Angular",
      updateTime: "13.05.2025 at 17:00",
      priority: "High"
    },
    {
      id: 3,
      title: "Choose a nail design for prom",
      updateTime: "20.05.2025 at 13:00",
      priority: "Medium"
    }]

    this.inProgressList = [{
      id: 2,
      title: "Learn coding in C#",
      updateTime: "31.05.2025 at 23:59",
      priority: "Medium"
    },
    {
      id: 5,
      title: "Study for final exam",
      updateTime: "19.05.2025 at 13:00",
      priority: "High"
    }]

    this.doneList = [{
      id: 4,
      title: "Help my brother with HTML",
      updateTime: "07.05.2025 at 23:59",
      priority: "Low"
    },
    {
      id: 6,
      title: "Buy new clothes",
      updateTime: "11.05.2025 at 18:00",
      priority: "High"
    }]
  }

  drop(event: CdkDragDrop<TodoItem[]>)
  {
    if(event.previousContainer === event.container)
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else
    {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  delete(list: TodoItem[], index: number)
  {
    list.splice(index, 1);
  }
  onEntered(enter: any)
  {
    console.log("enter ", enter)
  }
}
