import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {

  todos: ToDo[] = [];
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  completeToDo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  private loadToDos() {
    return this.todoService.getTodos()
      .subscribe(
        todos => {
          this.todos = todos.filter(t => !t.completed);
          this.doneToDos = todos.filter(t => t.completed);
        },
        this.handleError
      );
  }


  private handleError(error) {
    const errMsg = error.message || 'Error calling server';
    console.error(errMsg);
    alert('Error: Calling the server failed!');
    window.location.reload();
  }
}
