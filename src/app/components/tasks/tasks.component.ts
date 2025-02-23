import { Component, inject, Input } from '@angular/core';
import { TasksService } from './tasks.service';

import { TaskComponent } from './task/task.component';
import { type IUser } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
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
