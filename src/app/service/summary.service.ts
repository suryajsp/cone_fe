import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(
    private apiService: ApiService
  ) { }

}
