import { Component, inject, Input } from '@angular/core';

import { TasksService } from './tasks.service';
import { type IUser } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) public user!: IUser;
  private taskService = inject(TasksService);
  public isAddingTask = false;

  public get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  public onStartAddTask(): void {
    this.isAddingTask = true;
  }

  public onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}
