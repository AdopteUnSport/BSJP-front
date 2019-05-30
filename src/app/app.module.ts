import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomShoppingListComponent } from './shopping/bottom-shopping-list/bottom-shopping-list.component';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeContentComponent } from './fridge/fridge-content/fridge-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ScanComponent } from './scan/scan.component';
import { IngredientCardComponent } from './ingredients/ingredient-card/ingredient-card.component';

import { NavigationService } from './layout/navigation.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomShoppingListComponent,
    RecipesComponent,
    FridgeComponent,
    FridgeContentComponent,
    IngredientCardComponent,
    DashboardComponent,
    RecipeComponent,
    ShoppingComponent,
    ScanComponent,
    NavigationComponent,
    ToolbarComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
  ],
  exports : [
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
