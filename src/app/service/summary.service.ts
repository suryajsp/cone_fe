import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(
    private apiService: ApiService
  ) { }

  getSubCategory(): Observable<any> {
    return this.apiService.get('subcategories');
  }
}
