import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewComponent implements OnInit {

  pdfSrc: string = 'http://www.africau.edu/images/default/sample.pdf';
  constructor() { }

  ngOnInit() {
  }

}
