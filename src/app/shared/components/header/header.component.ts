import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { navItems, paramsNavItems } from '@configs/nav-bar.config';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RoleService } from '@core/services/role.service';
import { Menu } from '@core/models/menu.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    MatMenuModule,
    MenuPanelComponent,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent {

  constructor(){}

  private _roleService = inject(RoleService);

  navItems: Menu[] = navItems;
  paramsNavItems: Menu[] = paramsNavItems;

  displayMenu(menu: Menu){    
    if(menu.roles) {
      return menu.roles?.some(role => this._roleService.roles.includes(role));
    }
    return true;
  }
}
