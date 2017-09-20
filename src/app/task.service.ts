import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TaskService {
  tasks = [];
  taskObserver = new BehaviorSubject(this.tasks);   // : BehaviorSubject<Array<any>>

  addTask(task) {
    this.tasks.push(task);
    this.taskObserver.next(this.tasks);
  }

  constructor() { }


}
