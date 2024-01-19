import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthService } from '@core/services/auth.service';
import { AuthGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'auth', 
        component: LoginLayoutComponent,
        children: [
            { 
                path: '', 
                loadChildren: () => import('./features/authentication/authentication.module').then(m=>m.AuthenticationModule) 
            }
        ] 
    },
    { 
        path: '',
        component: HomeLayoutComponent,
        canActivate: [() => AuthGuard()],
        canActivateChild: [() => AuthGuard()],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule), 
            },
            {
                path: 'test',
                loadChildren: () => import('./features/crud/crud-routing.module').then(m=>m.CrudRoutingModule)
            },
            {
                path:'**', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    }
];
