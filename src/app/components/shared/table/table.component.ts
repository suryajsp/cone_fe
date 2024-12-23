import { Component, Input } from '@angular/core';

interface Columns {
  id: number;
  name: string;
  viewValue: string;
  checkBox: boolean;
  width: number;
  filterable: boolean;
  filter: any;
  format: any;
  locked: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() columnProperty: any;
  @Input() data: any;

  public gridData1: any[] = [];
  FinColumns: Columns[] = [];
  public scrollClass: string = '';

  ngOnInit() {
    this.FinColumns = this.columnProperty || [];
    this.gridData1 = this.data || [];
  }
}
