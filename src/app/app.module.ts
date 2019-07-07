import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { CoreModule } from 'src/app/core/core.module';

import { LayoutModule } from '../app/layout/layout.module';
import { FridgeModule } from '../app/fridge/fridge.module';
import { ShoppingModule } from '../app/shopping/shopping.module';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { RecipesComponent } from './recipes/recipes.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ScanComponent } from './scan/scan.component';
import { IngredientCardComponent } from './ingredients/ingredient-card/ingredient-card.component';

import { NavigationService } from './layout/navigation.service';
import { WelcomeComponent } from './welcome/welcome.component';


import { AuthHttpInterceptor } from './interceptor/auth-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    IngredientCardComponent,
    DashboardComponent,
    RecipeComponent,
    ScanComponent,
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
    CoreModule,
    LayoutModule,
    FridgeModule,
    ShoppingModule
  ],
  exports : [
  ],
  providers: [
    NavigationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
