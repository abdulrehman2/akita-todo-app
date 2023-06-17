import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { Todo } from './todo.model';
import { TodosState } from './todo.state';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from './visibility.filter';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {

    selectVisibilityFilter$ = this.select(state => state.ui.filter);
    $allTodos = this.selectAll();


    selectVisibleTodos$ = combineLatest([this.selectVisibilityFilter$, this.selectAll()], (filter, todos) => {
        switch (filter) {
            case VISIBILITY_FILTER.SHOW_COMPLETED:
                return todos.filter(t => t.completed);
            case VISIBILITY_FILTER.SHOW_ACTIVE:
                return todos.filter(t => !t.completed);
            default:
                return todos;
        }
    });

    constructor(protected override store: TodosStore) {
        super(store);
    }
}
