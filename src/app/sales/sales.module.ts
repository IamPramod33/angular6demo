import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { MatToolbarModule, MatSidenavModule, MatTabsModule, MatIconModule } from '@angular/material';
import { AddSectionStripComponent } from './components/add-section-strip/add-section-strip.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatToolbarModule,MatSidenavModule,MatToolbarModule,MatTabsModule,MatIconModule
  ],
  declarations: [SalesDashboardComponent, AddSectionStripComponent]
})
export class SalesModule { }
