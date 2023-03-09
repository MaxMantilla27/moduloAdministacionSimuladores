import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrls: ['./pmp.component.scss']
})
export class PmpComponent implements OnInit {

  constructor() { }


  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  ngOnInit(): void {
  }

}
