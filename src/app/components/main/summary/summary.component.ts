import { Component } from '@angular/core';
import { SummaryService } from '../../../service/summary.service';
import { TokenService } from '../../../service/core/token.service';

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

  tableData = [
    { column1: 'Data 1.1', column2: 'Data 1.2', column3: 'Data 1.3' },
    { column1: 'Data 2.1', column2: 'Data 2.2', column3: 'Data 2.3' },
    { column1: 'Data 3.1', column2: 'Data 3.2', column3: 'Data 3.3' },
  ];

  constructor(
    private summaryService: SummaryService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    /* this.summaryService.getSubCategory().subscribe(res => {
       const data = res;
       console.log(data);
     })*/
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
}
