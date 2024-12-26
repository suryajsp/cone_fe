import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './core/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router, private apiService: ApiService, private tokenService: TokenService) { }

  login(credentials: { username: string; password: string }) {
    return this.apiService.post('login/', credentials);
  }

  register(credentials: { username: string; password: string }) {
    return this.apiService.post('register/', credentials);
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
