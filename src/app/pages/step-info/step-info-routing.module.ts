import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepInfoComponent } from './page/step-info';

const routes: Routes = [
	{
		path: '',
		component: StepInfoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StepInfoRoutingModule {}
