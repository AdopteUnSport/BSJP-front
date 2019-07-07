import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../../core/components/dialog/auth-dialog/auth-dialog.component';

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

  public openDialog(){
    this.dialog.open(AuthDialogComponent);
  }

  public logout(){
    this.userService.logout().subscribe(response => {
      localStorage.clear();
      this.router.navigate(['welcome']);
      this.navigationService.close();
    })
  }

  constructor(
    private navigationService : NavigationService,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    
  }

}
