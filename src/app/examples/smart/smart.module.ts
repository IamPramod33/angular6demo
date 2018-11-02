import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartComponent} from '../smart/smart.component'
import {SmartRoutingModule} from '../smart/smart-routing.module'
import { DragAndDropModule } from 'angular-draggable-droppable';
import { SquadsComponent } from './squads/squads.component';
import { SelectedComponent } from './selected/selected.component';

@NgModule({
  imports: [
    CommonModule,
    SmartRoutingModule,
    DragAndDropModule
  ],
  declarations: [SmartComponent, SquadsComponent, SelectedComponent]
})
export class SmartModule { }
