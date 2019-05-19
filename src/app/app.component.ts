import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { NavigationService } from '../app/layout/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private navigationService : NavigationService
    ) {

  }

  ngOnInit() {
    this.navigationService.setSidenav(this.sidenav);
  }
}
