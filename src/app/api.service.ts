import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BACKEND_URL = 'http://localhost:3500/api'

  constructor(private http: HttpClient) { }

  postData(data: any) {
    let api_url = `${this.BACKEND_URL}/add-blog`;
    return this.http.post(api_url, data).pipe(
      catchError(this.handleHttpError)
    )
  }


  getData() {
    return this.http.get(`${this.BACKEND_URL}`)
      .pipe(
        catchError(this.handleHttpError)
      )
  }



  handleHttpError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status} \n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }


}
