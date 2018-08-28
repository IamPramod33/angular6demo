import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
declare var require;
const resizeImageData = require('resize-image-data');

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
	public context: CanvasRenderingContext2D;
  constructor() { }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.context.fillStyle = "red";
    this.context.fillRect(10, 10, 50, 50);
    let imageData = this.context.getImageData(10,10,50,50)
    let result = resizeImageData(imageData, imageData.width, imageData.height, 'nearest-neighbor')
	}

}
