import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RadialGaugeModule } from '@progress/kendo-angular-gauges';

import { SummaryComponent } from './summary/summary.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadialRingComponent } from './radial-ring/radial-ring.component';


//import 'hammerjs'; // Required for gestures


@NgModule({
  declarations: [
    SummaryComponent,
    LineChartComponent,
    RadialRingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ChartsModule,
    RadialGaugeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
