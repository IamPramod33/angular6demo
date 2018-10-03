import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewComponent } from './pdf-viewer.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    PdfJsViewerModule
  ],
  declarations: [PdfViewComponent],
  exports:[
    PdfViewComponent
  ]
})
export class PdfViewModule { }
