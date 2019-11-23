import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';

import { ShoppingComponent } from '../shopping/shopping.component';
import { BottomShoppingListComponent } from '../shopping/bottom-shopping-list/bottom-shopping-list.component';
import { MatTableModule, MatSelectModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [ShoppingComponent, BottomShoppingListComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class ShoppingModule { }
