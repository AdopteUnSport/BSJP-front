import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../material/material.module";

import { FridgeComponent } from '../fridge/fridge.component';
import { FridgeContentComponent } from '../fridge/fridge-content/fridge-content.component';

@NgModule({
  declarations: [FridgeComponent, FridgeContentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FridgeModule { }
