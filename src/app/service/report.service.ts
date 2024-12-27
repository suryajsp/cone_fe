import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { ApiService } from './core/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(
    private apiService: ApiService
  ) { }

  getWebpageMapping(condition: any = {}): Observable<any> {
    return this.apiService.get('website-webpage-mapping/', condition);
  }
  getSubcategoryTestResults(condition: any = {}): Observable<any> {
    return this.apiService.get('subcategory-test-results/');
  }
  getAccessibility(test_id: string = '', website: string = '', date: string = ''): Observable<any> {
    return this.apiService.get(`accessibility_test/?test_id=${test_id}&website=${website}&date=${date}`);
  }
  getSubcategories(): Observable<any> {
    return this.apiService.get('subcategories/');
  }
  getCategorySubcategoryMapping(): Observable<any> {
    return this.apiService.get('category-subcategory-mapping/');
  }

  getData() {
    return forkJoin({
      api1: this.getCategorySubcategoryMapping(),
      api2: this.getSubcategories(),
      api3: this.getSubcategoryTestResults(),
      api4: this.getWebpageMapping(),
    }).pipe(
      map(({ api1, api2, api3, api4 }) => {
        return api1.map((item1: any) => {
          const categories = item1.subcategories.map((catId: number) => {
            const api2Item = api2.find((item: any) => item.id === catId);
            const api3Item = api3.find((item: any) => item.id === api2Item.id);
            const api4Item = api4.find((item: any) => item.id === api3Item.id);

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
    );
  }
}
