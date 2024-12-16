import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
