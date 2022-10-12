import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { authResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/Account/login`;
    const body = { email, password };

    return  this.http.post<authResponse>(url, body);
  
  }
}
