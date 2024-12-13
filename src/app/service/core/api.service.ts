import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://your-api-url.com'; // Replace with your API base URL

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    });
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const headers = this.getHeaders();
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params, headers });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, { headers });
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, { headers });
  }

  delete<T>(endpoint: string): Observable<T> {
    const headers = this.getHeaders();
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { headers });
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body, { headers });
  }
}
