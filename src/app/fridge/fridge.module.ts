import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';

import { FridgeComponent } from '../fridge/fridge.component';
import { FridgeContentComponent } from '../fridge/fridge-content/fridge-content.component';

@NgModule({
  declarations: [FridgeComponent, FridgeContentComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class FridgeModule { }
