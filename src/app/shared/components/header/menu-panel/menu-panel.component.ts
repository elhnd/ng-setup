import { Component, Input, ViewChild, inject } from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RoleService } from '@core/services/role.service';
import { Menu } from '@core/models/menu.interface';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss',
  standalone: true,
  imports: [
    MenuPanelComponent,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ]
})
export class MenuPanelComponent {

  @ViewChild("menu", {static: true}) menu?: MatMenu;
  @Input() items?: Menu[];

  private _roleService = inject(RoleService);

  get safeMenu(): MatMenu | null {
    return this.menu || null;
  }

  displayMenu(menu: Menu){    
    if(menu.roles) {
      return menu.roles?.some(role => this._roleService.roles.includes(role));
    }
    return true;
  }
}
