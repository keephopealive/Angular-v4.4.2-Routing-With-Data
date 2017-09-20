import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  taskObserver;
  tasks = [];

  constructor(private _taskService: TaskService) {
    this._taskService.taskObserver.subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  addTaskThroughOtherComponent(task) {
    console.log('addTask', task);
    this._taskService.addTask(task);
  }

  ngOnInit() {
  }

}
