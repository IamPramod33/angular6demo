import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedServiceModule } from './shared/services/shared-service/shared-service.module';
import { MatToolbarModule } from '@angular/material';
import { fakeBackendProvider } from './shared/helpers/fake-backend';
// import { MockBackend } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
import { JwtInterceptor } from './shared/helpers/jwt-interceptor.service';
import { ErrorInterceptor } from './shared/helpers/error-interceptor.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,SharedServiceModule.forRoot(),MatToolbarModule, HttpClientModule, HttpModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    fakeBackendProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }