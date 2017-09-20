import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = [];
  taskObserver;

  constructor(private _taskService: TaskService) {
    this._taskService.taskObserver.subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  addTaskThroughTaskComponent(task) {
    console.log('addTask', task);
    this._taskService.addTask(task);
  }

  ngOnInit() {
  }

}
