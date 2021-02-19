import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import {
	ChartDataSets,
	ChartOptions,
	ChartType,
	RadialChartOptions,
} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { BaseOptionModel } from '../../../../core/model';
import { generateEnumOption } from '../../../../core/util';
import { AssessmentDialogComponent } from '../../dialog/assessment-dialog';
import {
	BarChartLabelsConst,
	BarChartOptionsConst,
	QuestionsConst,
	RadarChartConst,
	RadarChartLabelConst,
	RadarChartReportConst,
	CriteriaAdvancedConst,
	CriteriaBasicConst,
	CriteriaExpertConst,
	CriteriaNoneConst
} from '../../shared/const';
import {
	AdvancedConst,
	BeginnerConst,
	ExpertConst,
	IntermedieteConst,
	NoviceConst,
} from '../../shared/const/reports.const';
import {
	AnswerOptionEnum,
	IndustryOptionEnum,
	WeightValueEnum,
} from '../../shared/enum';
import { AssessmentModel } from '../../shared/model';

type Theme = 'light-theme' | 'dark-theme';

@Component({
	selector: 'app-assessment',
	templateUrl: './assessment.component.html',
	styleUrls: ['./assessment.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AssessmentComponent implements OnInit {
	public isLast: boolean;
	public selectedStep: number;
	public questionOption: any[];
	public industryOption: BaseOptionModel[];
	public assessmentForm: FormGroup;
	public answerOption: BaseOptionModel[];
	public dynHeight: number;
	public assessment: AssessmentModel;
	public dynBarHeight: number;

	/* Radar Chart */
	public radarChartType: ChartType = 'radar';
	public radarChartOptions: RadialChartOptions;
	public radarChartReportOptions: RadialChartOptions;
	public radarChartLabels: Label[];
	public radarChartData: ChartDataSets[];

	/* Bar Chart */
	public barChartType: ChartType = 'bar';
	public barChartOptions: ChartOptions;
	public barChartLabels: Label[];
	public barChartPlugins = [pluginDataLabels];
	public barChartDataIdeation: ChartDataSets[];
	public barChartDataMatching: ChartDataSets[];
	public barChartDataDesign: ChartDataSets[];
	public barChartDataCommercial: ChartDataSets[];


	private subscribers: Subscription[];
	private content: string;
	constructor(private router: Router,  private dialog: MatDialog) {}


	ngOnInit() {
		this.subscribers = [];
		this.isLast = false;
		this.selectedStep = 0;
		this.questionOption = QuestionsConst;
		this.dynHeight = 200;
		this.dynBarHeight = 140;
		this.answerOption = generateEnumOption(AnswerOptionEnum);
		this.industryOption = generateEnumOption(IndustryOptionEnum);
		this.assessment = new AssessmentModel();

		/* Radar & Bar Chart */
		this.radarChartOptions = RadarChartConst;
		this.radarChartReportOptions = RadarChartReportConst;
		this.radarChartLabels = RadarChartLabelConst;
		this.barChartOptions = BarChartOptionsConst;
		this.barChartLabels = BarChartLabelsConst;

		this.radarChartData = [
			{ data: [0, 0, 0, 0, 0, 0, 0, 0], label: 'iGOAL' },
		];
		this.barChartDataIdeation = [
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0],
				label: 'Your Score',
			},
			{
				data: [1, 3, 2, 1, 2, 2, 2, 1],
				label: 'Minimum Requirement',
				type: 'line',
			}
		];
		this.barChartDataMatching = [
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0],
				label: 'Your Score',
			},
			{
				data: [1, 2, 2, 3, 1, 3, 1, 2],
				label: 'Minimum Requirement',
				type: 'line',
			}
		];
		this.barChartDataDesign = [
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0],
				label: 'Your Score',
			},
			{
				data: [1, 2, 2, 1, 2, 1, 2, 3],
				label: 'Minimum Requirement',
				type: 'line',
			}
		];
		this.barChartDataCommercial = [
			{
				data: [0, 0, 0, 0, 0, 0, 0, 0],
				label: 'Your Score',
			},
			{
				data: [1, 2, 2, 1, 2, 2, 3, 1],
				label: 'Minimum Requirement',
				type: 'line',
			}
		];
		/* End */

		this.initForm();
	}

	private initForm() {
		this.assessmentForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, Validators.required),
			organization: new FormControl(null, Validators.required),
			industry: new FormControl(null, Validators.required),
			/* Q1 */
			q1: new FormControl(null, Validators.required),
			q2: new FormControl(null, Validators.required),
			q3: new FormControl(null, Validators.required),
			q4: new FormControl(null, Validators.required),
			q5: new FormControl(null, Validators.required),
			/* Q2 */
			q6: new FormControl(null, Validators.required),
			q7: new FormControl(null, Validators.required),
			/* Q3 */
			q8: new FormControl(null, Validators.required),
			q9: new FormControl(null, Validators.required),
			q10: new FormControl(null, Validators.required),
			q11: new FormControl(null, Validators.required),
			/* Q4 */
			q12: new FormControl(null, Validators.required),
			q13: new FormControl(null, Validators.required),
			q14: new FormControl(null, Validators.required),
			/* Q5 */
			q15: new FormControl(null, Validators.required),
			q16: new FormControl(null, Validators.required),
			q17: new FormControl(null, Validators.required),
			q18: new FormControl(null, Validators.required),
			/* Q6 */
			q19: new FormControl(null, Validators.required),
			q20: new FormControl(null, Validators.required),
			q21: new FormControl(null, Validators.required),
			q22: new FormControl(null, Validators.required),
			/* Q7 */
			q23: new FormControl(null, Validators.required),
			q24: new FormControl(null, Validators.required),
			/* Q8 */
			q25: new FormControl(null, Validators.required),
			q26: new FormControl(null, Validators.required),
			q27: new FormControl(null, Validators.required),
		});
	}

	public updateAverage(question: any) {
		if (!question) {
			return;
		}

		const questionByCategory = this.questionOption.filter(
			each => each.category === question.category
		);

		if (questionByCategory) {
			const questions = questionByCategory.reduce((result, each) => {
				if (this.assessmentForm.get('q' + each.id).value !== null) {
					const questionValue = this.assessmentForm.get('q' + each.id)
						.value;

					result.push(questionValue);
				}

				return result;
			}, []);

			this.average(questions, question.form, question.last);
		}
	}

	private average(questions: any[], category: string, last: boolean) {
		const average = questions.reduce((a, b) => a + b) / questions.length;

		this.assessment[category] = average;
		this.calculateChart();
		this.assessment.readinesScore();

		if (last) {
			this.assessment.analysisProcesses();
			console.log(this.assessment.reports);
		}
	}

	private calculateChart() {
		/* Max Value */
		const category1MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category1).toFixed(2));
		const category2MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category2).toFixed(2));
		const category3MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category3).toFixed(2));
		const category4MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category4).toFixed(2));
		const category5MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category5).toFixed(2));
		const category6MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category6).toFixed(2));
		const category7MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category7).toFixed(2));
		const category8MaxValue =
			3 * Number(parseFloat(WeightValueEnum.category8).toFixed(2));

		const sumMaxValue =
			category1MaxValue +
			category2MaxValue +
			category3MaxValue +
			category4MaxValue +
			category5MaxValue +
			category6MaxValue +
			category7MaxValue +
			category8MaxValue;

		/* Weight Value */
		const category1WeightValue =
			this.assessment.category1 * Number(WeightValueEnum.category1);
		const category2WeightValue =
			this.assessment.category2 * Number(WeightValueEnum.category2);
		const category3WeightValue =
			this.assessment.category3 * Number(WeightValueEnum.category3);
		const category4WeightValue =
			this.assessment.category4 * Number(WeightValueEnum.category4);
		const category5WeightValue =
			this.assessment.category5 * Number(WeightValueEnum.category5);
		const category6WeightValue =
			this.assessment.category6 * Number(WeightValueEnum.category6);
		const category7WeightValue =
			this.assessment.category7 * Number(WeightValueEnum.category7);
		const category8WeightValue =
			this.assessment.category8 * Number(WeightValueEnum.category8);

		const sumWeightValue =
			category1WeightValue +
			category2WeightValue +
			category3WeightValue +
			category4WeightValue +
			category5WeightValue +
			category6WeightValue +
			category7WeightValue +
			category8WeightValue;

		const category1Percentage = Number(
			(category1WeightValue / category1MaxValue) * 100
		).toFixed(0);
		const category2Percentage = Number(
			(category2WeightValue / category2MaxValue) * 100
		).toFixed(0);
		const category3Percentage = Number(
			(category3WeightValue / category3MaxValue) * 100
		).toFixed(0);
		const category4Percentage = Number(
			(category4WeightValue / category4MaxValue) * 100
		).toFixed(0);
		const category5Percentage = Number(
			(category5WeightValue / category5MaxValue) * 100
		).toFixed(0);
		const category6Percentage = Number(
			(category6WeightValue / category6MaxValue) * 100
		).toFixed(0);
		const category7Percentage = Number(
			(category7WeightValue / category7MaxValue) * 100
		).toFixed(0);
		const category8Percentage = Number(
			(category8WeightValue / category8MaxValue) * 100
		).toFixed(0);

		this.assessment.score = Number(
			(sumWeightValue / sumMaxValue) * 100
		).toFixed(0);

		this.radarChartData = [
			{
				data: [
					Number(category1Percentage),
					Number(category2Percentage),
					Number(category3Percentage),
					Number(category4Percentage),
					Number(category5Percentage),
					Number(category6Percentage),
					Number(category7Percentage),
					Number(category8Percentage),
				],
				label: 'iGOAL',
			},
		];
	}

	public updateSelectedStep(step: number) {
		this.selectedStep = step;
	}

	public lastStep(last: boolean) {
		if (last) {
			this.isLast = last;
			let btnShare = document.getElementById("btn-share");
			btnShare.style.display = "none";
			let btnPrint = document.getElementById("btn-print");
			btnPrint.style.display = "block";
			this.initStar();
		}
	}

	public showCompetency(indexCategory, showScore){
			this.competencyText(indexCategory, showScore);
			const subs = this.dialog
				.open(AssessmentDialogComponent, {
					width: '500px',
					data: {
						content: this.content,
					},
				})
				.afterClosed()
				.subscribe();
	}

	private competencyText(indexSelected, processSelected) {
		const questionByCategory = this.questionOption.filter(
			each => each.form === 'category' + ( 1+indexSelected )
		);
		if (questionByCategory){
				let modalCompetencyText = questionByCategory[0].category + ': </br><ul>';
				questionByCategory.forEach(element => {
					let score = (processSelected) ? " <i>Your self reflection score is <b>" +
	        	this.assessmentForm.get('q' + element.id).value +
						'</b></i> (0:none -> 3:expert)': ""
					modalCompetencyText = modalCompetencyText + '<li>'+ element.title +': '
						+ element.question + score + '</li>';
				})
				this.content = modalCompetencyText + '</br></ul>';
		}
	}

	private initStar() {
		this.barChartDataIdeation[0].data = this.assessment.getIdeation();
		this.barChartDataMatching[0].data = this.assessment.getMatching();
		this.barChartDataDesign[0].data = this.assessment.getDesign();
		this.barChartDataCommercial[0].data = this.assessment.getCommercial();

		const score = this.assessment.score;

		if (score > 0 && score <= 20) {
			this.assessment.classification = NoviceConst.title;
			this.assessment.stars = NoviceConst.star;
			this.assessment.text = NoviceConst.text;
		} else if (score > 20 && score <= 40) {
			this.assessment.classification = BeginnerConst.title;
			this.assessment.stars = BeginnerConst.star;
			this.assessment.text = BeginnerConst.text;
		} else if (score > 40 && score < 60) {
			this.assessment.classification = IntermedieteConst.title;
			this.assessment.stars = IntermedieteConst.star;
			this.assessment.text = IntermedieteConst.text;
		} else if (score > 60 && score < 80) {
			this.assessment.classification = AdvancedConst.title;
			this.assessment.stars = AdvancedConst.star;
			this.assessment.text = AdvancedConst.text;
		} else {
			this.assessment.classification = ExpertConst.title;
			this.assessment.stars = ExpertConst.star;
			this.assessment.text = ExpertConst.text;
		}
	}

	public openCriteriaDialog(
		criteria: 'none' | 'basic' | 'advanced' | 'expert'
	) {
		this.criteriaText(criteria);

		const subs = this.dialog
			.open(AssessmentDialogComponent, {
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

	public navigateToStepInfo() {
		this.router.navigate(['/base/step-info']);
	}
}
