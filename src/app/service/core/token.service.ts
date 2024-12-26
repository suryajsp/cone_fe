import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = 'authToken';
  private readonly USER_DETAILS = 'userDetails';
  private readonly USER_ID = 'userId';

  constructor() { }

  setToken(userData: any): void {
    localStorage.setItem(this.TOKEN_KEY, userData.token);
    localStorage.setItem(this.USER_DETAILS, JSON.stringify(userData.user));
    localStorage.setItem(this.USER_ID, userData.user_id);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getUserDetails(): any | null {
    const userDetails = localStorage.getItem(this.USER_DETAILS);
    return userDetails ? JSON.parse(userDetails) : null;
  }

  getUserId(): string | null {
    return localStorage.getItem(this.USER_ID);
  }
}
