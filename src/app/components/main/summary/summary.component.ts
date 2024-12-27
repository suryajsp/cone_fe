import { Component } from '@angular/core';
import { ReportService } from '../../../service/report.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  preferenceList = [
    { key: 1, value: 'All Websites' }
  ];
  selectedPreference = 1;

  cardData: any = [
    {
      icon: "bi bi-person-arms-up",
      title: "OverAll Accessibility Score",
      count: "234k",
      score: "95.2%",
      change: "+15.6%",
      checked_desc: "Instances Checked"
    },
    {
      icon: "bi bi-file-earmark-text",
      title: "Document Accessibility Score",
      count: {
        pdf: "2301 PDFs",
        ppt: "200 PPTs",
        docs: "140 DOCs",
      },
      score: "98.7%",
      change: "+7.6%",
      checked_desc: "Checked"
    },
    {
      icon: "bi bi-film",
      title: "Multimedia Accessibility Score",
      count: {
        video: "231 Videos",
        audio: "105 Audios"
      },
      score: "99.2%",
      change: "+3.6%",
      checked_desc: "Checked"
    }
  ];

  tableData: any = [];
  activeButton: string = 'website';

  tableDataByWebpages = [
    { website_url: 'page1.com', total_checks: 50, total_passed: 30, status: 'Completed' },
    { website_url: 'page2.com', total_checks: 75, total_passed: 60, status: 'In Progress' },
    { website_url: 'page2.com', total_checks: 75, total_passed: 60, status: 'In Progress' },
  ];

  tableDataByCheckpoints = [
    { website_url: 'checkpoint1.com', total_checks: 120, total_passed: 90, status: 'Completed' },
    { website_url: 'checkpoint2.com', total_checks: 150, total_passed: 110, status: 'In Progress' },
    { website_url: 'checkpoint2.com', total_checks: 150, total_passed: 110, status: 'In Progress' },
  ];

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.setActiveButton(this.activeButton);
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
    switch (button) {
      case 'website':
        this.reportService.getAccessibility().subscribe(res => {
          this.tableData = res;
        })
        break;
      case 'webpages':
        this.tableData = this.tableDataByWebpages;
        break;
      case 'checkpoints':
        this.tableData = this.tableDataByCheckpoints;
        break;
    }
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object';
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  calculatePercentage(value: number, total: number, decimalPlaces: number = 2): string {
    if (!total || total === 0) {
      return '0%';
    }
    const percentage = (value / total);
    return `${percentage.toFixed(decimalPlaces)}%`;
  }
}
