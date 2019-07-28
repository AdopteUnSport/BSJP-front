import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeComponent } from 'src/app/recipes/recipe/recipe.component';

import { BottomShoppingListComponent } from 'src/app/shopping/bottom-shopping-list/bottom-shopping-list.component';

@NgModule({
  declarations: [RecipesComponent,RecipeComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  entryComponents: [BottomShoppingListComponent]
})
export class RecipesModule { }
