import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private http: HttpClient) { }

  // Here we have a Fake API
  // We have used json-server for handling API Calls
  // MOCK Data is available in DB/database.json
  // Start JSON Server using npm run server
  // and then hit the API to retrieve data

  getTariffData(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/" + 'tariff-data').pipe(catchError(this.error))
  }

  // A simple error handler function that throws error
  // if API Call Failed
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
