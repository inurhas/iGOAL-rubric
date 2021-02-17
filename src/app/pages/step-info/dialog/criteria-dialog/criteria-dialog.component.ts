import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-criteria-dialog',
	templateUrl: './criteria-dialog.component.html',
	styleUrls: ['./criteria-dialog.component.scss'],
})
export class CriteriaDialogComponent implements OnInit {
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
