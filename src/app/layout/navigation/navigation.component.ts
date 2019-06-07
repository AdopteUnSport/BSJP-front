import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isUserConnected(){
    return this.userService.hasUser();
  }

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

}
