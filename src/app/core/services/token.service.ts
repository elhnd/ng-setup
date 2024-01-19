import { Injectable, inject } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserToken } from "@core/models/user-token.interface";

const TOKEN_KEY = 'TOKEN';

@Injectable({
    providedIn: 'root',
})
export class TokenService {

    private _jwtHelper = inject(JwtHelperService);

    setToken(token: string): void {
        this.removeToken();
        localStorage.setItem(TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    }

    removeToken(): void {
        localStorage.removeItem(TOKEN_KEY);
    }

    getDecodeToken (): UserToken | null {

        if(this.isTokenExpired()) return null;
        
        return this._jwtHelper
        .decodeToken(
            this.getToken() as string
        ) as UserToken;
    }

    getExpTimeToken(): number | null {
        return this.getDecodeToken()?.exp || null;
    }

    getIatToken(): number | null {
        return this.getDecodeToken()?.iat || null;
    }

    isTokenExpired(): boolean{
        return this._jwtHelper.isTokenExpired(this.getToken());
    }
}