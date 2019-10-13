import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {
  public activeTab;
  constructor() { }

  ngOnInit() {
    console.log("activeTab")
  }
  public tabChanged($event) {
    console.log($event)
  }
}
