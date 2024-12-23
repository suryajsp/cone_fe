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
  @Input() gridTitle: string | undefined;

  public gridData: any[] = [];
  FinColumns: Columns[] = [];
  public scrollClass: string = '';

  ngOnInit() {
    this.FinColumns = this.columnProperty || [];
    this.gridData = this.data || [];
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll(): void {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 100) {
      this.scrollClass = 'fixed-header';
    } else {
      this.scrollClass = '';
    }
  }

  selectColor($event: any, id: number) {
    this.FinColumns[id].checkBox = !this.FinColumns[id].checkBox;

    $event.stopPropagation();
    $event.preventDefault();

    if ($event.target) {
      $event.target.classList.toggle('selected');
    }
  }
}
