import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { INewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() public cancel = new EventEmitter<void>();
  @Output() public add = new EventEmitter<INewTaskData>();

  public enteredName: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';

  public onCancel(): void {
    this.cancel.emit();
  }

  public onAdd(): void {
    this.add.emit({
      title: this.enteredName,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
