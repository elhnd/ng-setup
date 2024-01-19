import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { Roles } from '@core/models/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

    private _tokenService   = inject(TokenService);

    get roles(): string[] {
        return this._tokenService.getDecodeToken()?.roles || [];
    }

    get isAdministrator(): boolean {        
        return this.roles.includes(Roles.ADMINISTRATOR);
    }

    get isUser(): boolean {
        return this.roles.includes(Roles.USER);
    }
}