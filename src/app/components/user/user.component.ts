import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) public user!: IUser;
  @Output() public select = new EventEmitter<string>();

  public get imagePath(): string {
    return '/assets/users/' + this.user.avatar;
  }

  public onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
