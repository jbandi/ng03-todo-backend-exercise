import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators'; // pipeable operators are new since RxJS 5.5

const backendUrl = 'http://localhost:3456/todos';

interface ToDoGetResponse { data: ToDo[]; }

@Injectable({providedIn: 'root'})
export class ToDoService {

  constructor(private http: HttpClient) {
  }

  getTodos(completed?: boolean): Observable<ToDo[]> {
    const requestUrl = backendUrl + (completed !== undefined ? `?completed=${completed}` : '');
    return this.http.get<ToDoGetResponse>(requestUrl)
      .pipe(
        map(response => response.data),
        map(
          todosArrayData => todosArrayData.map((todoData) => {
            return ToDo.createFromJson(todoData);
          })),
        catchError(this.handleError)
      );
  }

  saveTodo(todo: ToDo) {
    // TODO: Part of the exercise
    console.log('Not yet implemented ...');
  }

  updateTodo(todo: ToDo) {
    // TODO: Part of the exercise
    console.log('Not yet implemented ...');
  }

  deleteTodo(todo: ToDo) {
    // TODO: Part of the exercise
    console.log('Not yet implemented ...');
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }

}

