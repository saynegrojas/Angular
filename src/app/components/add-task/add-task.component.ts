import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/ITask';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // property for each field in html
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription = new Subscription;

  @Output() onSubmitTask: EventEmitter<ITask> = new EventEmitter()

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('please add a task');
      return;
    }
    // Once we get all the values from the form
    // we need to pass the newTask object up to the parent component by emitting our object
    // Once it goes to the parent component, we can call a method to the db
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onSubmitTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }


}
