import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';

import { FridgeComponent } from '../fridge/fridge.component';
import { FridgeContentComponent } from '../fridge/fridge-content/fridge-content.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [FridgeComponent, FridgeContentComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatTableModule
  ]
})
export class FridgeModule { }
