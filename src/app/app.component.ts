import { TaskService } from './task.service';
import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  taskObserver;

  constructor(private _taskService: TaskService) {
    this._taskService.taskObserver.subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

}
