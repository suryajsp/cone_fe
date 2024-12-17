import { Component } from '@angular/core';
import { color } from 'echarts';

@Component({
  selector: 'app-radial-ring',
  templateUrl: './radial-ring.component.html',
  styleUrls: ['./radial-ring.component.scss']
})
export class RadialRingComponent {
  options: any;

  constructor() {
    this.options = {
      title: {
        text: 'Top Error Pages',
        left: 'left',
        textStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000'
        }
      },
      color: ['#1E3F66', '#2E5984', '#528AAE', '#73A5C6', '#91BAD6'],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 'bottom',
      },
      series: [
        {
          name: 'Access Source',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Error 1' },
            { value: 735, name: 'Error 2' },
            { value: 580, name: 'Error 3' },
          ]
        },

      ],
      responsive: true,
    };
  }
}
