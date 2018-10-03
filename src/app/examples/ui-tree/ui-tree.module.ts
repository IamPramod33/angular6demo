import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTreeComponent } from './ui-tree.component';
import { UiTreeRoutingModule} from './ui-tree-routing.module'

import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    UiTreeRoutingModule, TreeModule.forRoot()
  ],
  declarations: [UiTreeComponent]
})
export class UiTreeModule { }
