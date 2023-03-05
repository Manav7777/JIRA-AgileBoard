import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from './components/common/_modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SpinerComponent } from './components/common/spiner/spiner.component';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RippleModule} from 'primeng/ripple';
import { MessageService } from 'primeng/api';
// import { HttpClientModule } from '@angular/common/http';

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
    ToastModule,
    BrowserAnimationsModule,
    RippleModule,
    // HttpClientModule,
  ],
  // exports:[
  //   HttpClientModule,
  // ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
