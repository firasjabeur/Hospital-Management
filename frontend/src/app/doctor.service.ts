import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import jwt_decode from 'jwt-decode';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }
  
  adduser(user: Doctor){
    return this.http.post<Doctor>('http://localhost:8080/api/v1/auth/register', user)
  }

  login(email: string, password: string) : Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/auth/authenticate', { email, password });
      
  }
    getToken(): string|null {
    return localStorage.getItem('token');
  }
  checkLoginStatus(): void {
    const token = this.getToken();
    if (token) {
      this.isLoggedIn.next(true);
      console.log('connecté')
    }
  }
  getCurrentDoctor(): Observable<Doctor|null> {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwt_decode(token) as { sub: string, exp: string };
      const email = decodedToken.sub;
      return this.getClientByEmail(email);
    }
    return of(null);
  }
  getClientByEmail(email:string):Observable<Doctor>{
    return this.http.get<Doctor>("http://localhost:8080/api/doctor/email/"+email);
  }
}


