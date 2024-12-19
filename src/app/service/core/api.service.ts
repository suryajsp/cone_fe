import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  /**
   * Generates headers for authenticated requests
   */
  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    const headersConfig: { [key: string]: string } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    return new HttpHeaders(headersConfig);
  }

  /**
   * Handles GET requests
   */
  get<T>(endpoint: string, params?: { [key: string]: any }): Observable<T> {
    const options = {
      headers: this.getHeaders(),
      params: params ? new HttpParams({ fromObject: params }) : undefined,
    };
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, options);
  }

  /**
   * Handles POST requests
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Handles PUT requests
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Handles DELETE requests
   */
  delete<T>(endpoint: string, params?: { [key: string]: any }): Observable<T> {
    const options = {
      headers: this.getHeaders(),
      params: params ? new HttpParams({ fromObject: params }) : undefined,
    };
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, options);
  }
}
