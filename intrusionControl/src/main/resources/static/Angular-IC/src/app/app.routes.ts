import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import {HomeComponent} from '../app/components/home/home.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'ic-system', component: HomeComponent, canActivate: [authGuard] },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];
