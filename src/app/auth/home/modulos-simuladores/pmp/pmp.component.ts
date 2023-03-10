import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrls: ['./pmp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PmpComponent implements OnInit {

  constructor() { }


  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public hide=false
  public tabIndex = 0;


  ngOnInit(): void {
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent)

  }
}
