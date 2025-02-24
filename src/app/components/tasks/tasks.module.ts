import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [FormsModule, CommonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
