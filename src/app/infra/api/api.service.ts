import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './api.config';
import { ApiResponse } from './api.types';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);

  get<T>(url: string): Observable<T> {
    return this.http
      .get<ApiResponse<T>>(`${this.config.baseUrl}${url}`)
      .pipe(map(res => res.data));
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http
      .post<ApiResponse<T>>(`${this.config.baseUrl}${url}`, body)
      .pipe(map(res => res.data));
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http
      .put<ApiResponse<T>>(`${this.config.baseUrl}${url}`, body)
      .pipe(map(res => res.data));
  }

  delete<T>(url: string): Observable<T> {
    return this.http
      .delete<ApiResponse<T>>(`${this.config.baseUrl}${url}`)
      .pipe(map(res => res.data));
  }
}