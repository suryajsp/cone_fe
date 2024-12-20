import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private apiService: ApiService
  ) { }

  getWebpageMapping(condition: any = {}): Observable<any> {
    return this.apiService.get('website-webpage-mapping/', condition);
  }
  getSubcategoryTestResults(condition: any = {}): Observable<any> {
    return this.apiService.get('subcategory-test-results/');
  }
  getAccessibility(): Observable<any> {
    return this.apiService.get('accessibility_test/?test_id=&user=1&website=https://continualengine.com/&date=');
  }
  getSubcategories(): Observable<any> {
    return this.apiService.get('subcategories/');
  }
  getCategorySubcategoryMapping(): Observable<any> {
    return this.apiService.get('category-subcategory-mapping/');
  }

}
