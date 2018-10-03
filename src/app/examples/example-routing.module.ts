import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { SmartComponent } from './smart/smart.component';

const routes: Routes = [
  { 
    path: "", 
    component: ExamplesListComponent,
    children: [
      { 
        path: "smart",
        loadChildren: "../examples/smart/smart.module#SmartModule"
      },
      { 
        path: "uitree",
        loadChildren: "../examples/ui-tree/ui-tree.module#UiTreeModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
