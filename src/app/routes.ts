import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    title: 'Sign in',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    title: 'Sign up',
    component: SignUpComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
];
