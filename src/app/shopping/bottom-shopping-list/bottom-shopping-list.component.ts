import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
@Component({
  selector: 'app-bottom-shopping-list',
  templateUrl: './bottom-shopping-list.component.html',
  styleUrls: ['./bottom-shopping-list.component.scss']
})
export class BottomShoppingListComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomShoppingListComponent>,
  ) { }

  ngOnInit() {
  }

}
