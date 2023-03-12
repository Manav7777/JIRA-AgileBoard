import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './dashboard-routing.module';
import { IssuesComponent } from './issues/issues.component';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PrimeModalComponent } from './prime-modal/prime-modal.component';
import { CreateEpicsComponent } from './create-epics/create-epics.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    DashbaordComponent,
    SidebarComponent,
    HeaderComponent,
    IssuesComponent,
    TableComponent,
    ProfileMenuComponent,
    PrimeModalComponent,
    CreateEpicsComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TableModule,
    MenuModule,
    RippleModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
  ],
  exports: [TableModule,MenuModule,ButtonModule,DialogModule],
})
export class DashboardModule {}
