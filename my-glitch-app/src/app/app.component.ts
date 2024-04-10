import { Component } from '@angular/core';
//import {UsersService} from './users.service';


@Component({
  selector: 'app-root',
  template: `
  
    <app-greeting></app-greeting>
    <nav>
      <a routerLink="contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
      <a routerLink="items" routerLinkActive="active" ariaCurrentWhenActive="page">Items</a>
      <a routerLink="customers" routerLinkActive="active" ariaCurrentWhenActive="page">Customers</a>
      <a routerLink="todos" routerLinkActive="active" ariaCurrentWhenActive="page">Todos</a>
      
    </nav>
    <router-outlet></router-outlet>

  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  
//make a method to call the api from UserService
  // constructor(private user : UsersService) {
  //   this.user.getData().subscribe(data => {
  //     console.warn(data)
  //   })
  // }
}
