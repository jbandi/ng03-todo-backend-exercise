import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-todos.component.html',
})
export class DoneTodosComponent implements OnInit {

  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  removeToDo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  private loadToDos() {
    this.todoService.getTodos()
      .subscribe(
        todos => this.doneToDos = todos.filter(t => t.completed)
      );
  }
}
