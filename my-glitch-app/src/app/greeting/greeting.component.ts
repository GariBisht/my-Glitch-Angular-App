import { Component } from '@angular/core';
import { UserService } from '../greeting/user.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
})
export class GreetingComponent {
  title = 'Just Some Funtionality in Angular App';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
