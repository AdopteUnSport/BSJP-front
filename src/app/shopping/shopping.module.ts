import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../material/material.module";

import { ShoppingComponent } from '../shopping/shopping.component';
import { BottomShoppingListComponent } from '../shopping/bottom-shopping-list/bottom-shopping-list.component';

@NgModule({
  declarations: [ShoppingComponent, BottomShoppingListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ShoppingModule { }
