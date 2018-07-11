import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatTabGroup } from '@angular/material';
import {filter,map }  from 'rxjs/operators';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  tabIndex: number = 0;
  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  constructor(
    private router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }
  
  onSelectedIndexChange(newTabIndex) {
    if (this.tabIndex !== newTabIndex) {
      this.tabIndex = newTabIndex;
    }
  }

}
