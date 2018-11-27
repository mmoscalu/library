import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Home',
        routerLink: '/'
      },
      {
        label: 'About',
        routerLink: 'about',
        icon: 'pi pi-fw pi-pencil'
      },
      {
        label: 'Contact',
        routerLink: 'contact',
        icon: 'pi pi-fw pi-pencil'
      }
    ];

  }

}
