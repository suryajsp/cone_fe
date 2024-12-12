import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  public categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // X-axis labels
  public data: number[] = [70, 60, 50, 50, 80, 60]; // Y-axis data
  public data1: number[] = [40, 40, 50, 60, 55, 60]; // Y-axis data
  public data2: number[] = [30, 20, 25, 15, 40, 30]; // Y-axis data
}
