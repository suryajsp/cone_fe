import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: ApiService) {

  }
  startAccessibility(data: string): Observable<any> {
    return this.apiService.post('accessibility_test/start_accessibility_test/', { 'website_url': data });
  }
}
