import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoreModule } from 'src/app/core/core.module';

import { LayoutModule } from '../app/layout/layout.module';
import { WelcomeModule } from 'src/app/welcome/welcome.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { FridgeModule } from '../app/fridge/fridge.module';
import { ShoppingModule } from '../app/shopping/shopping.module';
import { RecipesModule } from 'src/app/recipes/recipes.module';
import { ScanModule } from 'src/app/scan/scan.module';
import { IngredientsModule } from 'src/app/ingredients/ingredients.module';

import { AppComponent } from './app.component';

import { NavigationService } from './layout/navigation.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './interceptor/auth-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    WelcomeModule,
    DashboardModule,
    FridgeModule,
    ShoppingModule,
    ScanModule,
    RecipesModule,
    IngredientsModule,
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
