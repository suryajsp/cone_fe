import { Component } from '@angular/core';
import { ReportService } from '../../service/report.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {

  columnProperties: any = [
    {
      id: 0,
      name: 'website_url',
      viewValue: 'URL',
      checkBox: true,
      width: 220,
      filterable: true,
      filter: 'text',
      format: '',
      locked: true,
    },
    {
      id: 1,
      name: 'status',
      viewValue: 'Status',
      checkBox: true,
      width: 100,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 2,
      name: 'subcategory_id',
      viewValue: 'Rule ID',
      checkBox: true,
      width: 120,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 3,
      name: 'guideline',
      viewValue: 'Guideline',
      checkBox: true,
      width: 120,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 4,
      name: 'wcag_principle',
      viewValue: 'WCAGPrinciple',
      checkBox: true,
      width: 150,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 5,
      name: 'severity',
      viewValue: 'Severity',
      checkBox: true,
      width: 100,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 6,
      name: 'html',
      viewValue: 'HTML',
      checkBox: true,
      width: 160,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 7,
      name: 'bug_summary',
      viewValue: 'Bug Summary',
      checkBox: true,
      width: 160,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 8,
      name: 'user_impact',
      viewValue: 'User Impact',
      checkBox: true,
      width: 220,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 9,
      name: 'expected_result',
      viewValue: 'Expected Result',
      checkBox: true,
      width: 120,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
    {
      id: 10,
      name: 'recommendation',
      viewValue: 'Recommendation',
      checkBox: true,
      width: 220,
      filterable: true,
      filter: 'text',
      format: '',
      locked: false,
    },
  ]

  tableData: any[] = [];
  tableTitle: string = '';

  constructor(
    private reportService: ReportService
  ) {
    this.reportService.getData().subscribe(
      (data) => {
        this.tableData = data[0]?.categories;
        this.tableTitle = data[0]?.title;
      },
      (err) => {
        console.error('Error Fetching Report Data:', err);
      }
    );
  }
}