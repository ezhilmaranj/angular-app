import {Component, Input, OnInit} from '@angular/core';
import {NavService} from '../../services/nav-service.service';
import NavItem from '../../model/NavItem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  constructor(private navService: NavService, private router: Router) { }

  @Input() parentMenu: string;

  submenus: NavItem[] = [];
  children: NavItem[] = [];

  ngOnInit(): void {
    this.submenus = this.navService.getMenus(this.parentMenu);
    this.children = this.submenus.find(item => item.isDefault)?.children;
  }

  onMenuSelect = (id: number) => {
    this.children = this.submenus.find(menu => menu.id === id).children || [];
    if (this.children.length === 0) {
      this.router.navigateByUrl('/');
    }
  }
}
