import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './dashboard-routing.module';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [
    DashbaordComponent,
    SidebarComponent,
    HeaderComponent,
    IssuesComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class DashboardModule {}
