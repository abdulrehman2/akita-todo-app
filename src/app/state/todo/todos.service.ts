
import { createTodo, Todo } from "./todo.model";
import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { TodosStore } from "./todos.store";
import { VISIBILITY_FILTER } from "./visibility.filter";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }

  complete(id: string) {
    this.todosStore.update(id, { completed: true });
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: string) {
    this.todosStore.remove(id);
  }
}
