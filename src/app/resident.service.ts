import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getResidents(): Observable<any> {
    return this.http.get(endpoint + 'get_residents/').pipe(
      map(this.extractData));
  }

  getObjectRequests(): Observable<any> {
    return this.http.get(endpoint + 'get_requests/').pipe(
      map(this.extractData));
  }

  getObjectRequestsByDates(dates): Observable<any> {
    return this.http.post<any>(endpoint + 'get_requests_by_date', JSON.stringify(dates), httpOptions).pipe(
      tap((objectrequest) => console.log(`accepted objectrequest`)),
      catchError(this.handleError<any>('acceptObjectRequest'))
    );
  }

  acceptObjectRequest(user) {
    return this.http.post<any>(endpoint + 'accept_objectrequest', JSON.stringify(user), httpOptions).pipe(
      tap((objectrequest) => console.log(`accepted objectrequest`)),
      catchError(this.handleError<any>('acceptObjectRequest'))
    );
  }

  createHorary(horay) {
    return this.http.post<any>(endpoint + 'create_horary', JSON.stringify(horay), httpOptions).pipe(
      tap((horay) => console.log(`accepted horay`)),
      catchError(this.handleError<any>('accepthoray'))
    );
  }

  cancelObjectRequest(objectrequest_id) {
    return this.http.post<any>(endpoint + 'cancel_objectrequest', JSON.stringify(objectrequest_id), httpOptions).pipe(
      tap((objectrequest) => console.log(`cancel_objectrequest`)),
      catchError(this.handleError<any>('cancelObjectRequest'))
    );
  }

  addObjectRequest(objectrequest): Observable<any> {
    console.log(objectrequest);
    return this.http.post<any>(endpoint + 'create_request', JSON.stringify(objectrequest), httpOptions).pipe(
      tap((objectrequest) => console.log(`added objectrequest w/ id=${objectrequest.id}`)),
      catchError(this.handleError<any>('addobjectrequest'))
    );
  }



}

