import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';
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

  public showToggleSidenav() {
    if(this.router.url === '/welcome') {
      return false;
    }
    return true;
  }

  constructor(
    private navigationService : NavigationService,
    private userService: UserService,
    private router: Router 
  ) { }

  ngOnInit() {
    console.log(this.router);
  }

}
