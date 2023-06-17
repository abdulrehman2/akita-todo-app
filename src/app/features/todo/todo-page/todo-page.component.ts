import { Component, OnInit } from '@angular/core';
import { NEVER, Observable, of } from 'rxjs';
import { Todo } from 'src/app/state/todo/todo.model';
import { TodosService } from 'src/app/state/todo/todos.service';
import { VISIBILITY_FILTER } from 'src/app/state/todo/visibility.filter';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  constructor(private todosService: TodosService) {

  }

  ngOnInit(): void {
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  deleteTodo(id: string) {
    debugger;
    this.todosService.delete(id);
  }
  completeTodo(id: string) {
    this.todosService.complete(id);
  }

  updateFilter(filter: VISIBILITY_FILTER){
    this.todosService.updateFilter(filter);
  }
}
