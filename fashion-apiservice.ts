import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from './classes/Fashion';

@Injectable({
  providedIn: 'root',
})
export class FashionAPIService {
  headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
  requestOptions: Object = {
    headers: this.headers,
    responseType: "text"
  };

  constructor(private _http: HttpClient) {}

  // 1. Lấy danh sách tất cả Fashion
  getFashions(): Observable<any> {
    return this._http.get<any>("/fashions", this.requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 2. Lấy chi tiết Fashion bằng ID
  getFashion(id: string): Observable<any> {
    return this._http.get<any>("/fashions/" + id, this.requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 3. Lấy chi tiết Fashion bằng Slug (phục vụ chức năng mới)
  getFashionBySlug(slug: string): Observable<any> {
    return this._http.get<any>("/fashions/slug/" + slug, this.requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 4. Thêm mới Fashion
  postFashion(aFashion: any): Observable<any> {
    let jsonString = JSON.stringify(aFashion);
    return this._http.post<any>("/fashions", jsonString, this.requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 5. Cập nhật Fashion
  putFashion(aFashion: any): Observable<any> {
    let jsonString = JSON.stringify(aFashion);
    return this._http.put<any>("/fashions", jsonString, this.requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 6. Xóa Fashion
  deleteFashion(fashionid: string): Observable<any> {
    return this._http.delete<any>("/fashions/" + fashionid, this.requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}