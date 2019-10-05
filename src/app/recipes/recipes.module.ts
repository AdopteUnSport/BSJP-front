import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeComponent } from 'src/app/recipes/recipe/recipe.component';

@NgModule({
  declarations: [RecipesComponent,RecipeComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class RecipesModule { }
