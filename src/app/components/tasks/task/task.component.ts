import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) public task!: ITask;

  private taskService = inject(TasksService);

  public onTaskComplete(): void {
    this.taskService.removeTask(this.task.id);
  }
}
