import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';
import { getRandomIndex } from '../../../helpers/getRandomIndex';
import User from '../../../types/interfaces';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public selectedUser: User = DUMMY_USERS[getRandomIndex(DUMMY_USERS)];

  public get imagePath(): string {
    return 'assets/users/' + this.selectedUser.avatar;
  }
}
