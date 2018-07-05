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
        children: [
          { 
            path: "list",
            component: ClientListComponent
          },{ 
            path: "details/:clientId",
            component: ClientInfoComponent
          },
          {path: '', redirectTo: 'list', pathMatch: 'full'},]
      },
      { 
        path: "vocab",
        component: VocabularyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
