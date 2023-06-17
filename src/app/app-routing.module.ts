import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './features/todo/todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todo', component: TodoPageComponent },
  { path: '', component: TodoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
