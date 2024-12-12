import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
