import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { MatSidenav } from '@angular/material';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public toggleSidenav(){
    this.navigationService.toggle();
  }

  public isUserConnected(){
    return this.userService.hasUser();
  }

  constructor(
    private navigationService : NavigationService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

}
