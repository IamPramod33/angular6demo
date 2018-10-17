import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementSetupComponent } from './element-setup.component';
import { ElementSetupRoutingModule } from './element-setup-routing.module';
import { AddElementStripComponent } from './add-element-strip/add-element-strip.component';
import { DisplayElementsComponent } from './display-elements/display-elements.component';

@NgModule({
  imports: [
    CommonModule,
    ElementSetupRoutingModule
  ],
  declarations: [ElementSetupComponent, AddElementStripComponent, DisplayElementsComponent]
})
export class ElementSetupModule { }
