import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from '../app/guards/auth.guard';
import {HomeComponent} from '../app/components/home/home.component';


export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];
