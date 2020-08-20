import {Component, Input, OnInit} from '@angular/core';
import {NavService} from '../../services/nav-service.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  constructor(private navService: NavService) { }

  @Input() parent: string;

  ngOnInit(): void {
    this.navService.getMenus(parent);
  }
}
