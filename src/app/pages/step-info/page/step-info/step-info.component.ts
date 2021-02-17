import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CriteriaDialogComponent } from '../../dialog/criteria-dialog';
import {
	CriteriaAdvancedConst,
	CriteriaBasicConst,
	CriteriaExpertConst,
	CriteriaNoneConst
} from '../../shared/const';

@Component({
	selector: 'app-step-info',
	templateUrl: './step-info.component.html',
	styleUrls: ['./step-info.component.scss'],
})
export class StepInfoComponent implements OnInit, OnDestroy {
	private subscribers: Subscription[];
	private content: string;

	constructor(private router: Router, private dialog: MatDialog) {}

	ngOnInit() {
		this.subscribers = [];
	}

	ngOnDestroy() {
		this.subscribers.forEach(each => each.unsubscribe());
	}

	public openCriteriaDialog(
		criteria: 'none' | 'basic' | 'advanced' | 'expert'
	) {
		this.criteriaText(criteria);

		const subs = this.dialog
			.open(CriteriaDialogComponent, {
				width: '500px',
				data: {
					content: this.content,
				},
			})
			.afterClosed()
			.subscribe();

		this.subscribers.push(subs);
	}

	private criteriaText(criteria: 'none' | 'basic' | 'advanced' | 'expert') {
		switch (criteria) {
			case 'none':
				this.content = CriteriaNoneConst;
				break;

			case 'basic':
				this.content = CriteriaBasicConst;
				break;

			case 'advanced':
				this.content = CriteriaAdvancedConst;
				break;

			case 'expert':
				this.content = CriteriaExpertConst;
				break;

			default:
				break;
		}
	}

	public navigateToQuiz() {
		this.router.navigate(['/assessment']);
	}
}
