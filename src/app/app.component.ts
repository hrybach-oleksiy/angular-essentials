import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DUMMY_USERS } from '../dummy-users';
import User from '../types/interfaces';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'udemy-todo';
  public users = DUMMY_USERS;
  private selectedUserId?: string;

  get selectedUser(): User {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  public onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
