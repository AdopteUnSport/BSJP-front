import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { BottomShoppingListComponent } from 'src/app/shopping/bottom-shopping-list/bottom-shopping-list.component';

@NgModule({
  declarations: [RecipeComponent, BottomShoppingListComponent],
  imports: [
    CommonModule, BottomShoppingListComponent
  ],
  entryComponents: [BottomShoppingListComponent],
})
export class RecipeModule { }
