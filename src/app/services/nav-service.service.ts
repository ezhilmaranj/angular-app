import { Injectable } from '@angular/core';
import NavData from '../mockData/nav-data';
import Nav from '../model/Nav';
import NavItem from '../model/NavItem';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getTopNavs = (): Nav[] => {
    return NavData;
  }

  getMenus(parentMenu: string): NavItem[] {
    console.log(parentMenu);
    return NavData.find(nav => nav.text === parentMenu).submenus;
  }
}
