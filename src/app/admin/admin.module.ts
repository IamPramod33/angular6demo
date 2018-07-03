import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { ClientsComponent } from './clients/clients.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  declarations: [DashboardComponent,SidenavComponent, ClientsComponent, VocabularyComponent]
})
export class AdminModule { }
