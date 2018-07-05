import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/provider/breadcrumb.service';
import { Router, ActivationEnd } from '@angular/router';
import { Breadcrumb } from '../../shared/models/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent{

  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private breadcrumbProvider: BreadcrumbService) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd) {
        if (e.snapshot.data.breadcrumbs) {
          this.breadcrumbs = Object.assign([], e.snapshot.data.breadcrumbs);
        } else {
          if (this.breadcrumbs.length <= 0 && e.snapshot.data.defaultBreadcrumbs) {
            this.breadcrumbs = Object.assign([], e.snapshot.data.defaultBreadcrumbs);
          }
        }
      }
    });

    this.breadcrumbProvider._addItem.subscribe(breadcrumb => this.breadcrumbs.push(breadcrumb));
  }

}
