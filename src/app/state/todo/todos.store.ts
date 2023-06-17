import {  EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from './visibility.filter';
import { TodosState } from './todo.state';


const initialState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL
  }
};

// by default Akita takes the id key from the entity id field. To change it, you can pass the idKey option to the store config 
// for example StoreConfig({ name: 'todos', idKey: '_id' })
@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}