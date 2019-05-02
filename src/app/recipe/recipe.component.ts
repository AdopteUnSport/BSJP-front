import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomShoppingListComponent } from 'src/app/shopping/bottom-shopping-list/bottom-shopping-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe : number;

  addOnList() {
    this.bottomSheet.open(BottomShoppingListComponent);
  }

  constructor(
    private activatedRoute : ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = params.id;
    });
  }

}
