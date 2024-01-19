import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

const TOKEN_HEADER_KEY = 'Authorization';
//Ne pas enlever l'espace sur le string 
const BEARER = 'Bearer ';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private _authService    = inject(AuthService);
    private _tokenService   = inject(TokenService)
    private _router         = inject(Router);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        let authReq = req;

        const token = this._tokenService.getToken();

        this._authService.isAuthenticated$.subscribe((auth) => {
            if(auth) {
                authReq = req.clone({
                    headers: req.headers.set(TOKEN_HEADER_KEY, BEARER + token),
                });
            } else {
                this._router.navigateByUrl("auth/login");
            }
        });

        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];