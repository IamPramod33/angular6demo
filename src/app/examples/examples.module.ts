import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesRoutingModule } from './example-routing.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatTabGroup } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MatTabsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule
  ],
  declarations: [ExamplesListComponent]
})
export class ExamplesModule { }
