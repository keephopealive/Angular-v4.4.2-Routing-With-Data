import { OtherComponent } from './other/other.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskComponent,
    children: []
  },
  {
    path: 'other',
    component: OtherComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
