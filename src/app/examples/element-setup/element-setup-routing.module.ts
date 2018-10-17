import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementSetupComponent } from './element-setup.component';

const routes: Routes = [
  { 
    path: "", 
    component: ElementSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementSetupRoutingModule { }
