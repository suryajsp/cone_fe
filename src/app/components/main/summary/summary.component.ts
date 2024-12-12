import { Component } from '@angular/core';

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
