import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { IngredientCardComponent } from 'src/app/ingredients/ingredient-card/ingredient-card.component';

@NgModule({
  declarations: [IngredientCardComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class IngredientsModule { }
