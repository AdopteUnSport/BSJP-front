import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { ScanComponent } from 'src/app/scan/scan.component';

@NgModule({
  declarations: [ScanComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ScanModule { }
