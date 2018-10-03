import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartComponent} from '../smart/smart.component'
import {SmartRoutingModule} from '../smart/smart-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SmartRoutingModule
  ],
  declarations: [SmartComponent]
})
export class SmartModule { }
