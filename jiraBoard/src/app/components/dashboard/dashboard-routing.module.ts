import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TableComponent } from './table/table.component';
import { DashbaordComponent } from './dashbaord.component';
import { IssuesComponent } from './issues/issues.component';
// import { ToastComponent } from '../common/toast/toast.component';

const routes: Routes = [
  { path: '', component: DashbaordComponent,children:[
    { path: 'issues', component: IssuesComponent},
    { path: 'issues/:id', component:IssuesComponent},
    
  ]},
  // { path: 'toast', component:ToastComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
