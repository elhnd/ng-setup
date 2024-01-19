import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '@core/services/token.service';


export const AuthGuard = () => {

    const _router           = inject(Router);
    const _snackBar         = inject(MatSnackBar);
    const _tokenService     = inject(TokenService);

    if(_tokenService.isTokenExpired()) {
        _snackBar.open(
            'Your session has expired. Please log in again.',
            '❌'
        );
        _router.navigateByUrl('auth/login');

        return false;
    } 

    return true;
}