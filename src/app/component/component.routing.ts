import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { ClavesComponent } from './claves/claves.component';
import { GestionComponent } from './gestion/gestion.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EstatusComponent } from './estatus/estatus.component';

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'users',
				component: UsersComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
			{
				path: 'inicio',
				component: InicioComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
			{
				path: 'estatus',
				component: EstatusComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
			{
				path: 'resultados',
				component: ResultadosComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
			{
				path: 'gestion',
				component: GestionComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
			{
				path: 'claves',
				component: ClavesComponent,
				canActivate: [AuthGuard],
				data: { roles: ['ADMIN'] }
			},
		]
	}
];
