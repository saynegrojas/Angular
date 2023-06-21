import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // assign an Input property to be passed from the parent 
  @Input() task: ITask;
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter()
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: ITask) {
    // pass up to parent since our service is from the parent 
    console.log(task)
    this.onDeleteTask.emit(task);
  }

  onToggle(task: ITask) {
    this.onToggleReminder.emit(task);
  }

}
