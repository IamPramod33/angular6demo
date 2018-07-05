import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user.dashboard.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { UserDevComponent } from './user-dev/user-dev.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserHrComponent } from './user-hr/user-hr.component';
import { Breadcrumb } from '../shared/models/breadcrumb';
import { AddDevComponent } from './user-dev/add-dev/add-dev.component';

const routes: Routes = [
  {
    path: "dashboard", 
    component: UserDashboardComponent
  },{
    path: "type", 
    component: UserNavigationComponent,
    children: [
      { 
        path: "dev", 
        component: UserDevComponent,
        data: {
          breadcrumbs: [
            new Breadcrumb("Developers", "../type/dev")
          ]
        }
      },
      {
        path: 'devAdd',
        component: AddDevComponent,
        data: {
          breadcrumbs: [
            new Breadcrumb("Developers", "dev"),
            new Breadcrumb("Create developer profile", "../type/devAdd")
          ]
        },
      },
      { 
        path: "manage", 
        component: UserManageComponent,
        data: {
          breadcrumbs: [
            new Breadcrumb("managers", "/manage")
          ]
        }
      },
      { 
        path: "hr", 
        component: UserHrComponent,
        data: {
          breadcrumbs: [
            new Breadcrumb("HR", "/hr")
          ]
        }
      },
      {path: '', redirectTo: 'dev', pathMatch: 'full'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
