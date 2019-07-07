import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './../routing.module';
import { MaterialModule } from "../material/material.module";
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { AuthDialogComponent } from './components/dialog/auth-dialog/auth-dialog.component';
import { WelcomeSliderComponent } from './components/sliders/welcome-slider/welcome-slider.component';

@NgModule({
  declarations: [AuthDialogComponent, WelcomeSliderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule,
    SlideshowModule,
    MatPasswordStrengthModule
  ],
  exports: [AuthDialogComponent, WelcomeSliderComponent]
})
export class CoreModule { }
