import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../material/material.module";
import { CoreModule } from '../core/core.module';

import { NavigationComponent } from '../layout/navigation/navigation.component';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';


import { AuthDialogComponent } from '../core/components/dialog/auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [NavigationComponent, ToolbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  exports: [NavigationComponent, ToolbarComponent],
  entryComponents: [AuthDialogComponent]
})
export class LayoutModule { }
