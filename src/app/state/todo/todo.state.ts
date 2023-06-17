import { Todo } from './todo.model';
import { VISIBILITY_FILTER } from './visibility.filter';
import { EntityState } from '@datorama/akita';

// entity state needs to things (an entity and a type for ID )
// this is store interface
// we can extend the store by adding new porperties to the interface
export interface TodosState extends EntityState<Todo, string> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}
