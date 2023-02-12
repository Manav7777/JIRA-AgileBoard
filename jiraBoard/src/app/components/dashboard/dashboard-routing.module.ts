import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbaordComponent } from './dashbaord.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '', component: DashbaordComponent,children:[
    { path: 'issues', component: IssuesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
