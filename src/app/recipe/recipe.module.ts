import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './../app.module';
import { RecipeComponent } from './recipe.component';
import { BottomShoppingListComponent } from 'src/app/shopping/bottom-shopping-list/bottom-shopping-list.component';

@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    AppModule
  ],
  entryComponents: [BottomShoppingListComponent]
})
export class RecipeModule {

 }
