
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { TodoService } from './../services/todo.service';


@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, FormsModule, NgbModule.forRoot()],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
