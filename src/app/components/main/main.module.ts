import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';

import { SummaryComponent } from './summary/summary.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadialRingComponent } from './radial-ring/radial-ring.component';
import { NgxEchartsModule } from 'ngx-echarts';


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
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
