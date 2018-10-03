import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTreeComponent } from './ui-tree.component';

const routes: Routes = [
  { 
    path: "", 
    component: UiTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiTreeRoutingModule { }
