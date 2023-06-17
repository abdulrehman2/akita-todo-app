import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todo/todo.model';
import { TodosQuery } from 'src/app/state/todo/todos.query';
import { TodoFilter, VISIBILITY_FILTER } from 'src/app/state/todo/visibility.filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Output() deleteTodoEvent = new EventEmitter<string>();
  @Output() completeTodoEvent = new EventEmitter<string>();
  @Output() changeFilterEvent = new EventEmitter<VISIBILITY_FILTER>();
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;

  displayedColumns: string[] = ['id', 'title', 'completed', 'action'];
  initialFilters: TodoFilter[] = [
    { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
    { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
    { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
  ];

  constructor(private todosQuery: TodosQuery) {

  }

  ngOnInit(): void {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }

  deleteTodo(todo: Todo) {
    debugger;
    this.deleteTodoEvent.emit(todo.id);
  }

  completeTodo(todo: Todo) {
    this.completeTodoEvent.emit(todo.id);
  }

  changeFilter(event: any) {
    this.changeFilterEvent.emit(event.value);
  }
}
