
import { Component, OnInit } from '@angular/core';

import { TodoService } from './../services/todo.service';
// import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PolymathLabs Todo Application';
  todoText: any;
  allTodos: any[] = [];

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(res => {
      this.allTodos = res.hasOwnProperty('data') ? res.data : res;
    }, err => {
      console.log('something went wrong: ', err)
    });
  }

  addTodo(e) {
    e.preventDefault();
    console.log('text: ', this.todoText);
    if (this.todoText.length <= 2) {
      return;
    }

    this.todoService.newTodo(this.todoText)
      .subscribe(res => {
        this.allTodos.push(res);
        this.todoText = '';
      }, err => {
        console.log('something went wrong: ', err);
      });
  }

  removeTodo(todo) {
    console.log(todo._id);
    this.todoService.removeTodo(todo._id).subscribe(res => {
      // remove from todos by id
      const idx = this.allTodos.map(function (item) {
        return item._id;
      }).indexOf(todo._id);

      this.allTodos.splice(idx, 1);
    }, err => {
      console.log('something went wrong: ', err);
    });
  }
}
