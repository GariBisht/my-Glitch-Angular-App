import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { Routes,
  RouterModule } from '@angular/router';

  const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list',    component: TodosComponent },
    //{ path: ':id', component: ItemsDetailComponent }
  ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodosRoutingModule { }
