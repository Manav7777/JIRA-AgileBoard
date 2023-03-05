import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './dashboard-routing.module';
import { IssuesComponent } from './issues/issues.component';
import { DetailComponent } from './detail/detail.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DashbaordComponent,
    SidebarComponent,
    HeaderComponent,
    IssuesComponent,
    DetailComponent,
    TableComponent,
    ProfileMenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TableModule,
    MenuModule,
    RippleModule,
    ButtonModule,
  ],
  exports: [TableModule,MenuModule,ButtonModule],
})
export class DashboardModule {}
