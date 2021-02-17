import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailDialogComponent } from '../../dialog/detail-dialog';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	private subscribers: Subscription[];

	constructor(private router: Router, private dialog: MatDialog) {}

	ngOnInit() {
		this.subscribers = [];
	}

	ngOnDestroy() {
		this.subscribers.forEach(each => each.unsubscribe());
	}

	public openDetailDialog() {
		const subs = this.dialog
			.open(DetailDialogComponent)
			.afterClosed()
			.subscribe();

		this.subscribers.push(subs);
	}

	public navigateToStepInfo() {
		this.router.navigate(['/base/step-info']);
	}
}
