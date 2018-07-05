import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedServiceModule } from './shared/services/shared-service/shared-service.module';
import { MatToolbarModule } from '@angular/material';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,SharedServiceModule.forRoot(),MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }