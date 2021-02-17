import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailDialogComponent } from './dialog/detail-dialog';
import { DashboardComponent } from './page/dashboard';

@NgModule({
	declarations: [DashboardComponent, DetailDialogComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatButtonModule,
		MatDialogModule,
	],
	entryComponents: [DetailDialogComponent],
})
export class DashboardModule {}
