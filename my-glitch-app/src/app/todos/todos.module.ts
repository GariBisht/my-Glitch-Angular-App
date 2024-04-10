import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos.component';


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule , TodosRoutingModule],
 // declarations: [ TodosComponent ],
  providers:    [ TodosService ]

})
export class TodosModule { }
