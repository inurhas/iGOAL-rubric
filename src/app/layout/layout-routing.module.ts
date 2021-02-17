import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './page/base-layout';
import { DashboardLayoutComponent } from './page/dashboard-layout';

const routes: Routes = [
	{
		path: '',
		component: DashboardLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full',
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('../pages/dashboard/dashboard.module').then(
						m => m.DashboardModule
					),
			},
		],
	},
	{
		path: 'base',
		component: BaseLayoutComponent,
		children: [
			{
				path: 'step-info',
				loadChildren: () =>
					import('../pages/step-info/step-info.module').then(
						m => m.StepInfoModule
					),
			},
		],
	},
	{
		path: 'assessment',
		component: BaseLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../pages/assessment/assessment.module').then(
						m => m.AssessmentModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
