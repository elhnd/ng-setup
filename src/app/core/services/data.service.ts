import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class DataService<T> {

    public _http = inject(HttpClient);
    constructor(@Inject(String) private APIUrl: string) { }

    getAll(): Observable<T[]> {
        return this._http.get<T[]>(this.APIUrl);
    }

    get(id: T): Observable<T> {
        return this._http.get<T>(`${this.APIUrl}/${id}`);
    }

    update(data: T): Observable<T> {
        return this._http.put<T>(`${this.APIUrl}`, data);
    }

    create(data: T): Observable<T> {
        return this._http.post<T>(this.APIUrl, data);
    }

    delete(id: T): Observable<T> {
        return this._http.delete<T>(`${this.APIUrl}/${id}`);
    }
}