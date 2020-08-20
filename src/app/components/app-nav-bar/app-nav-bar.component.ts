import { Component, OnInit } from '@angular/core';

import { NavService } from '../../services/nav-service.service';
import Nav from '../../model/Nav';
import NavItem from '../../model/NavItem';

@Component({
  selector: 'app-app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent implements OnInit {

  constructor(private navService: NavService) { }

  navData: Nav[] = [];
  submenus: NavItem[] = [];
  children: NavItem[] = [];

  ngOnInit() {
    this.navData = this.navService.getTopNavs();
    console.log(this.navData);
  }

  onMenuSelect = (menuId: number) => {
    this.submenus = this.navData.find(nav => nav.id === menuId)?.submenus;
  }

  onSubmenuSelect = (menuId: number) => {
    this.children = this.submenus.find(nav => nav.id === menuId)?.children;
  }
}
