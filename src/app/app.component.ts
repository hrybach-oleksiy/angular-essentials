import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { IUser } from './components/user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'udemy-todo';
  public users = DUMMY_USERS;
  private selectedUserId?: string;

  get selectedUser(): IUser {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  public onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
