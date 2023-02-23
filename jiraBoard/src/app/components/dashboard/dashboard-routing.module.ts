import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DashbaordComponent } from './dashbaord.component';
import { DetailComponent } from './detail/detail.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: '', component: DashbaordComponent,children:[
    { path: 'issues', component: IssuesComponent},
    { path: 'issues/:id', component:DetailComponent},
  ]},
  { path: 'table', component:TableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
