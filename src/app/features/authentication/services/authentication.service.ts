import { Injectable } from '@angular/core';
import { User } from '../../../core/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../../../core/models/credential.interface';
import { Observable, map } from 'rxjs';
import { apiUrl } from '@configs/api-url.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _currentUser: User | null = null;

  constructor(private _http: HttpClient) { }

  login(credential: Credential): Observable<User> {
    return this._http.post<User>(`${apiUrl.auth.login}`, credential)
    .pipe(
      map((auth)=>{
        return auth
      })
    );
  }

  logout(): void {
    this._currentUser = null;
  }

  isAuthenticated(): boolean {
    return this._currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this._currentUser;
  }
}
