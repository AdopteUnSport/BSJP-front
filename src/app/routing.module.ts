import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { FridgeComponent } from './fridge/fridge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScanComponent } from './scan/scan.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo : 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fridge', component: FridgeComponent},
  { path: 'scan', component: ScanComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipe/:id', component: RecipeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes , { useHash: true }),
  ],
  exports: [ RouterModule ]
})
export class RoutingModule {

 }
