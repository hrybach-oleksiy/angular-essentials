import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) public task!: ITask;
  @Output() public complete = new EventEmitter<string>();

  public onTaskComplete(): void {
    this.complete.emit(this.task.id);
  }
}
