import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from '../interfaces/todo.model';

@Injectable()
export class TodoService {
  readonly allTodosUrl = `${environment.api_url}/todos`;
  readonly newTodoUrl = `${environment.api_url}/todos`;
  readonly deleteTodoUrl = `${environment.api_url}/todos`;

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http
      .get<any>(this.allTodosUrl, {})
      .map(res => {
        return res;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }

  newTodo(name) {
    return this.http
      .post<any>(this.newTodoUrl, {
        name
      })
      .map(res => {
        return res;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }

  removeTodo(id) {
    console.log('id: ', id);
    return this.http
      .delete<any>(`${this.deleteTodoUrl}/${id}`)
      .map(res => {
        return res;
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
}