import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatRadioModule,
	MatStepperModule,
	MatDialogModule,
} from '@angular/material';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentComponent } from './page/assessment';
import { AssessmentDialogComponent } from './dialog/assessment-dialog';

@NgModule({
	declarations: [AssessmentComponent, AssessmentDialogComponent],
	imports: [
		CommonModule,
		AssessmentRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatStepperModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatButtonModule,
		MatIconModule,
		ChartsModule,
		MatDialogModule,
	],
	entryComponents: [AssessmentDialogComponent],
	providers: [ThemeService],
})
export class AssessmentModule {}
