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
        routerLink: '/',
        icon: 'pi pi-home'
      },
      {
        label: 'About',
        routerLink: 'about',
        icon: 'pi pi-bookmark'
      },
      {
        label: 'Contact',
        routerLink: 'contact',
        icon: 'fas fa-phone-square'
      }
    ];

  }

}
