import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

import { AuthDialogComponent } from './components/dialog/auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [AuthDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [AuthDialogComponent]
})
export class CoreModule { }
