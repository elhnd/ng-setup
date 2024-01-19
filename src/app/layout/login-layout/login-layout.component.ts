import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './login-layout.component.html'
})
export class LoginLayoutComponent {}
