import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FaceService {
  private baseUrl = 'http://localhost:3000/face';

  constructor(private http: HttpClient) {}

  detect(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/detect`, formData);
  }
}
