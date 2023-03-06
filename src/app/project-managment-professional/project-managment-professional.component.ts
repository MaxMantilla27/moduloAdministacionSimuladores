import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-project-managment-professional',
  templateUrl: './project-managment-professional.component.html',
  styleUrls: ['./project-managment-professional.component.scss']
})
export class ProjectManagmentProfessionalComponent implements OnInit {

  constructor() { }


  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;


  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;  
  //   }
  // }

  ngOnInit(): void {
  } 

}
