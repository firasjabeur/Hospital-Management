import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = 'http://localhost:8080/api/v2/medicines';
  
  constructor(private httpClient: HttpClient) { }

  getMedicinesList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

}
