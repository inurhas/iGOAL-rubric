import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-assessment-dialog',
	templateUrl: './assessment-dialog.component.html',
	styleUrls: ['./assessment-dialog.component.scss'],
})
export class AssessmentDialogComponent implements OnInit {
	public content: string;

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private data: {
			content: string;
		}
	) {}

	ngOnInit() {
		this.content = this.data.content;
	}
}
