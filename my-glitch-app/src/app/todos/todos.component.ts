import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  //standalone: true,
  //imports: [],
 templateUrl: './todos.component.html',
//  template: `
//     <h3 highlight>Todos List</h3>
//   `

})
export class TodosComponent {

  //make a method to call the api from TodosService
  data: any;
  constructor(private user : TodosService) {
    this.user.getData().subscribe(data => {
      console.warn(data)
      this.data = data;

    })
  }

  
}
