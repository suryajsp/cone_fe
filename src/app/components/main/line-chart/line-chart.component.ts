import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  chartOptions: any;

  constructor() {
    this.chartOptions = {
      color: ['#1E3F66', '#2E5984', '#528AAE', '#73A5C6', '#91BAD6'],
      title: {
        text: 'Website Accessibility Performance Visualization',
        left: 'left',
        top: '5%',
        textStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000'
        }
      },
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '30%',
        left: '10%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        top: '15%',
        left: 'center',
        itemGap: 40
      },
      series: [
        {
          name: 'Website 1',
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260],
          smooth: true,
          lineStyle: {
            width: 2
          }
        },
        {
          name: 'Website 2',
          type: 'line',
          data: [100, 130, 124, 118, 115, 123, 230],
          smooth: true,
          lineStyle: {
            width: 2
          }
        },
        {
          name: 'Website 3',
          type: 'line',
          data: [50, 30, 24, 28, 35, 47, 60],
          smooth: true,
          lineStyle: {
            width: 2
          }
        }
      ],
      responsive: true
    };
  }
}
