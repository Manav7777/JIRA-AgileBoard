import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from './components/common/_modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SpinerComponent } from './components/common/spiner/spiner.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ModalModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
