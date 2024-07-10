import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../guards/auth.guard';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'users',
				component: UsersComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			}
		]
	}
];
