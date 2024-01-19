import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrl } from '@configs/api-url.config';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _http = inject(HttpClient); 
  
  addExemple(data: any) {
    return this._http.post(apiUrl.crud, data);
  }

  updateExemple(id: number, data: any): Observable<any> {
    return this._http.put(apiUrl.crud+`/${id}`, data);
  }

  getListExemple(): Observable<any> {
    return this._http.get(apiUrl.crud);
      // .pipe(
      //   map(data => data.map(user => new User(user.id, user.name))),
      //   catchError(this.handleError<User>('getUser'))
      // );
  }

  getExemple(id: number): Observable<any> {
    return this._http.get(apiUrl.crud+`/${id}`);
  }

  deleteExemple(id: number): Observable<any> {
    return this._http.delete(apiUrl.crud+`/${id}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
