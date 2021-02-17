import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatIconModule,
	MatToolbarModule,
} from '@angular/material';
import { FooterComponent } from './component/footer';
import { HeaderComponent } from './component/header';
import { LayoutRoutingModule } from './layout-routing.module';
import { BaseLayoutComponent } from './page/base-layout';
import { DashboardLayoutComponent } from './page/dashboard-layout';

@NgModule({
	declarations: [
		BaseLayoutComponent,
		DashboardLayoutComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class LayoutModule {}
