import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user.dashboard.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { UserDevComponent } from './user-dev/user-dev.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserHrComponent } from './user-hr/user-hr.component';
import { BreadcrumbService } from '../shared/provider/breadcrumb.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatToolbarModule, MatButtonModule, MatButton } from '@angular/material';
import { AddDevComponent } from './user-dev/add-dev/add-dev.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule
  ],
  providers:[BreadcrumbService],
  declarations: [UserDashboardComponent, UserNavigationComponent, UserDevComponent, UserManageComponent, UserHrComponent, BreadcrumbComponent, AddDevComponent]
})
export class UserModule { }
