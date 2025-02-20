import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({ required: true }) public user!: User;
  @Output() public select = new EventEmitter<string>();

  public get imagePath(): string {
    return '/assets/users/' + this.user.avatar;
  }

  public onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
