import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthData } from './auth-data.model';
const BACKEND_URL = environment.apiUrl + '/auth';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  getToken() {
    return this.token;
  }

  constructor(private http: HttpClient, private router: Router) { }

  createUser(email: string, password: string) {
    const authData: AuthData = {
      email,
      password
    };
    this.http.post(BACKEND_URL + '/signup', authData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = {
      email,
      password
    };

    this.http.post<{ token: string }>(BACKEND_URL + '/login', authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        // this.getAdminAccess();
        this.router.navigate(['/']);

      });

  }

  getAdminAccess(): any {
    try {
      const decodeToken = jwt_decode(this.token);
      if (decodeToken.email === 'admin@cnl.com') {
        return true;
      } else {
        return false;
      }
    } catch (Error) {
      return false;
    }
  }

}
