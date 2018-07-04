import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ClientInfoComponent } from './clients/client-info/client-info.component';
import { ClientListComponent } from './clients/client-list/client-list.component';

const routes: Routes = [
  { 
    path: "", 
    component: DashboardComponent,
    children: [
      { 
        path: "clients", 
        component: ClientsComponent,
        data: {
          breadcrumb: "Clients"
        },
        children: [
          { 
            path: "list",
            component: ClientListComponent,
            data: {
              breadcrumb: "List"
            }
          },{ 
            path: "details/:clientId",
            component: ClientInfoComponent,
            data: {
              breadcrumb: "Client details"
            }
          },
          {path: '', redirectTo: 'list', pathMatch: 'full'},]
      },
      { 
        path: "vocab",
        component: VocabularyComponent,
        data: {
          breadcrumb: "Voabulary"
        }
      },
      //{ path: '**', redirectTo: '/clients/list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
