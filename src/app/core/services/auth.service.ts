import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { apiUrl } from '@configs/api-url.config';
import { TokenService } from './token.service';
import { User } from '@core/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends DataService<User> {

    private _router         = inject(Router);
    private _tokenService   = inject(TokenService);

    public _isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
        super(apiUrl.auth.login);
    }

    get isAuthenticated$(): BehaviorSubject<boolean> {
        this._isAuthenticated$.next(!this._tokenService.isTokenExpired());        
        return this._isAuthenticated$;
    }

    get username(): string | null {
        return this._tokenService.getDecodeToken()?.username || null;
    }

    login(credential: Credential): Observable<User> {
        return this._http.post<User>(`${apiUrl.auth.login}`, credential)
        .pipe(
            map(
                (auth)=>{
                    let token = auth.token;
                    if(token) {                    
                        this._isAuthenticated$.next(true);
                        this._tokenService.setToken(token);
                    }
                    return auth
                }
            )
        );
    }

    logout(): void {
        localStorage.clear();
        this._router.navigateByUrl('auth/login');
    }
}