import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesListComponent } from './examples-list/examples-list.component';

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
      },
      { 
        path: "elements",
        loadChildren: "../examples/element-setup/element-setup.module#ElementSetupModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
