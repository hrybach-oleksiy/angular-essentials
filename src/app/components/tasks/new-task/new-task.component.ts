import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

import { type INewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) public userId!: string;
  @Output() public close = new EventEmitter<void>();

  public enteredName: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';

  private taskService = inject(TasksService);

  public onCancel(): void {
    this.close.emit();
  }

  public onAdd(): void {
    this.taskService.addTask(
      {
        title: this.enteredName,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId,
    );

    this.close.emit();
  }
}
