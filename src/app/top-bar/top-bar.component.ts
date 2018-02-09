import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  // templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [ routerTransition ],
  template: `
    <main [@routerTransition]="getState(o)">
    <router-outlet #o="outlet"></router-outlet>
    </main>
    `
})
export class TopBarComponent implements OnInit {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  constructor() { }

  ngOnInit() {
  }

}
