import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./layout/layout.module').then(m => m.LayoutModule),
	},
	{
		path: 'base',
		loadChildren: () =>
			import('./layout/layout.module').then(m => m.LayoutModule),
		data: {
			state: 'animation',
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
