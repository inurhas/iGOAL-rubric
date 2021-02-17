import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../../animation';

@Component({
	selector: 'app-base-layout',
	templateUrl: './base-layout.component.html',
	styleUrls: ['./base-layout.component.scss'],
	// animations: [fadeAnimation],
})
export class BaseLayoutComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	public getState(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state;
	}
}
