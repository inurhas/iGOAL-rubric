import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
} from '@angular/material';
import { CriteriaDialogComponent } from './dialog/criteria-dialog';
import { StepInfoComponent } from './page/step-info';
import { StepInfoRoutingModule } from './step-info-routing.module';

@NgModule({
	declarations: [StepInfoComponent, CriteriaDialogComponent],
	imports: [
		CommonModule,
		StepInfoRoutingModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
	],
	entryComponents: [CriteriaDialogComponent],
})
export class StepInfoModule {}
