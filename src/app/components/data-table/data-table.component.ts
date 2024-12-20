import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { debounceTime, forkJoin, fromEvent, map } from 'rxjs';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  tableData: any[] = [];
  tableTitle: string = '';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    forkJoin({
      api1: this.homeService.getCategorySubcategoryMapping(),
      api2: this.homeService.getSubcategories(),
      api3: this.homeService.getSubcategoryTestResults(),
      api4: this.homeService.getWebpageMapping(),
      api5: this.homeService.getAccessibility(),
    })
      .pipe(
        map(({ api1, api2, api3, api4, api5 }) => {
          // Merge data
          return api1.map((item1: any) => {
            const categories = item1.subcategories.map((catId: number) => {
              const api2Item = api2.find((item: any) => item.id === catId);
              const api3Item = api3.find(
                (item: any) => item.id === api2Item.id
              );
              const api4Item = api4.find(
                (item: any) => item.id === api3Item.id
              );
              const api5Item = api5.find(
                (item: any) => item.test_id === api4Item.test
              );

              return {
                id: api2Item.id,
                severity: api2Item.severity,
                subcategory_id: api2Item.subcategory_id,
                wcag_principle: api2Item.wcag_principle,
                guideline: api2Item.guideline,
                user_impact: api2Item.user_impact,
                recommendation: api2Item.recommendation,
                bug_summary: api3Item.bug_summary,
                html: api3Item.html,
                status: api3Item.status,
                expected_result: api3Item.expected_result,
                website_url: api4Item.website_url,
              };
            });

            return {
              id: item1.id,
              title: item1.category_name,
              categories,
            };
          });
        })
      )
      .subscribe((data) => {
        this.tableTitle = data[0].title;
        this.tableData = data[0].categories;
        console.log(data);
      });
  }

}