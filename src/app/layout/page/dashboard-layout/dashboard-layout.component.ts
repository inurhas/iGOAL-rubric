import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../../animation';

@Component({
	selector: 'app-dashboard-layout',
	templateUrl: './dashboard-layout.component.html',
	styleUrls: ['./dashboard-layout.component.scss'],
	// animations: [fadeAnimation],
})
export class DashboardLayoutComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	public getState(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state;
	}
}
