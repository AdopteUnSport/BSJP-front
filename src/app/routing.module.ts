import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { FridgeComponent } from './fridge/fridge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScanComponent } from './scan/scan.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo : 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'fridge', component: FridgeComponent, canActivate: [AuthGuard]},
  { path: 'scan', component: ScanComponent, canActivate: [AuthGuard]},
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard]},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]},
  { path: 'recipe/:id', component: RecipeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class RoutingModule {

 }
