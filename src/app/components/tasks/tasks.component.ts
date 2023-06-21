import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { ITask } from 'src/app/ITask';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // property where tasks will be stored
  tasks: ITask[] = [];

  // DI: inject service in constructor
  // so we don't have to keep initializing a new object
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
   this.getTasks();
  }

  getTasks(){
    return this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(taskData => taskData.id !== task.id))
  }
  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  submitTask(task: ITask) {
    this.taskService.addTask(task).subscribe(tasks => this.tasks.push(tasks));
  }
}
 