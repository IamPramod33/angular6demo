import { NgModule,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatTabGroup } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { ClientsComponent } from './clients/clients.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ClientInfoComponent } from './clients/client-info/client-info.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientService } from '../shared/services/admin/client.service';
import { HttpClientModule } from "@angular/common/http";
import { SharedServiceModule } from '../shared/services/shared-service/shared-service.module';
import { VocabSourceComponent } from './vocabulary/vocab-source/vocab-source.component';
import { AddVocabularyComponent } from './vocabulary/add-vocabulary/add-vocabulary.component';
import { PdfViewModule } from '../shared/modules/pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    HttpClientModule,
    SharedServiceModule,
    MatTabsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, PdfViewModule
  ],
  providers:[ClientService],
  declarations: [DashboardComponent,SidenavComponent, ClientsComponent, VocabularyComponent, ClientInfoComponent, ClientListComponent, VocabSourceComponent, AddVocabularyComponent]
})
export class AdminModule { }
