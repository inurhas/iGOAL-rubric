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
} from '@angular/material';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentComponent } from './page/assessment';

@NgModule({
	declarations: [AssessmentComponent],
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
	],
	providers: [ThemeService],
})
export class AssessmentModule {}
