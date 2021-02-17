import {
	CommercialConst,
	DesignConst,
	IdeationConst,
	MatchingConst,
} from '../const';
import { ReportsModel } from './reports.model';

export class AssessmentModel {
	public score: number | string;
	public stars: string[];
	public classification: string;
	public text: string;
	public category1: number;
	public category2: number;
	public category3: number;
	public category4: number;
	public category5: number;
	public category6: number;
	public category7: number;
	public category8: number;
	public category1Ideation: number;
	public category2Ideation: number;
	public category3Ideation: number;
	public category4Ideation: number;
	public category5Ideation: number;
	public category6Ideation: number;
	public category7Ideation: number;
	public category8Ideation: number;
	public category1Matching: number;
	public category2Matching: number;
	public category3Matching: number;
	public category4Matching: number;
	public category5Matching: number;
	public category6Matching: number;
	public category7Matching: number;
	public category8Matching: number;
	public category1Design: number;
	public category2Design: number;
	public category3Design: number;
	public category4Design: number;
	public category5Design: number;
	public category6Design: number;
	public category7Design: number;
	public category8Design: number;
	public category1Commercial: number;
	public category2Commercial: number;
	public category3Commercial: number;
	public category4Commercial: number;
	public category5Commercial: number;
	public category6Commercial: number;
	public category7Commercial: number;
	public category8Commercial: number;
	public averageIdeation: number;
	public averageMatching: number;
	public averageDesign: number;
	public averageCommercial: number;
	public reports: ReportsModel[];

	constructor() {
		this.score = 0;
		this.stars = [];
		this.category1 = null;
		this.category2 = null;
		this.category3 = null;
		this.category4 = null;
		this.category5 = null;
		this.category6 = null;
		this.category7 = null;
		this.category8 = null;
		this.category1Ideation = null;
		this.category2Ideation = null;
		this.category3Ideation = null;
		this.category4Ideation = null;
		this.category5Ideation = null;
		this.category6Ideation = null;
		this.category7Ideation = null;
		this.category8Ideation = null;
		this.category1Matching = null;
		this.category2Matching = null;
		this.category3Matching = null;
		this.category4Matching = null;
		this.category5Matching = null;
		this.category6Matching = null;
		this.category7Matching = null;
		this.category8Matching = null;
		this.category1Design = null;
		this.category2Design = null;
		this.category3Design = null;
		this.category4Design = null;
		this.category5Design = null;
		this.category6Design = null;
		this.category7Design = null;
		this.category8Design = null;
		this.category1Commercial = null;
		this.category2Commercial = null;
		this.category3Commercial = null;
		this.category4Commercial = null;
		this.category5Commercial = null;
		this.category6Commercial = null;
		this.category7Commercial = null;
		this.category8Commercial = null;
		this.averageIdeation = null;
		this.averageMatching = null;
		this.averageDesign = null;
		this.averageCommercial = null;
		this.reports = [
			{ category: 'category1', label: 'Growth Virtues', data: [] },
			{ category: 'category2', label: 'Effectual Creativity', data: [] },
			{
				category: 'category3',
				label: 'Technical Domain Specific',
				data: [],
			},
			{ category: 'category4', label: 'Responsive Teamwork', data: [] },
			{
				category: 'category5',
				label: 'Value-based dynamic organizing',
				data: [],
			},
			{
				category: 'category6',
				label: 'Long-term oriented Networking',
				data: [],
			},
			{ category: 'category7', label: 'Cultural Empathy', data: [] },
			{
				category: 'category8',
				label: 'Intergenerational safety facilitation',
				data: [],
			},
		];
	}

	private averageCalculation(list: any[]) {
		const average = list.reduce((a, b) => a + b) / 8;
		const percent = (average * 100).toFixed(2);

		return Number(percent);
	}

	public readinesScore() {
		IdeationConst.forEach((each, i) => {
			const index = i + 1;

			const ideation = each.value;
			const matching = MatchingConst[i].value;
			const design = DesignConst[i].value;
			const commercial = CommercialConst[i].value;

			const idetaionCount = this['category' + index] / ideation;
			const matchingCount = this['category' + index] / matching;
			const designCount = this['category' + index] / design;
			const commercialCount = this['category' + index] / commercial;

			this['category' + index + 'Ideation'] =
				idetaionCount < 1 ? idetaionCount : 1;
			this['category' + index + 'Matching'] =
				matchingCount < 1 ? matchingCount : 1;
			this['category' + index + 'Design'] =
				designCount < 1 ? designCount : 1;
			this['category' + index + 'Commercial'] =
				commercialCount < 1 ? commercialCount : 1;

			this.averageIdeation = this.averageCalculation(this.getIdeation());
			this.averageMatching = this.averageCalculation(this.getMatching());
			this.averageDesign = this.averageCalculation(this.getDesign());
			this.averageCommercial = this.averageCalculation(
				this.getCommercial()
			);
		});
	}

	public getIdeation() {
		const list = [
			Number(parseFloat(String(this.category1Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category2Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category3Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category4Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category5Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category6Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category7Ideation)).toFixed(2)),
			Number(parseFloat(String(this.category8Ideation)).toFixed(2)),
		];

		return list;
	}

	public getMatching() {
		const list = [
			Number(parseFloat(String(this.category1Matching)).toFixed(2)),
			Number(parseFloat(String(this.category2Matching)).toFixed(2)),
			Number(parseFloat(String(this.category3Matching)).toFixed(2)),
			Number(parseFloat(String(this.category4Matching)).toFixed(2)),
			Number(parseFloat(String(this.category5Matching)).toFixed(2)),
			Number(parseFloat(String(this.category6Matching)).toFixed(2)),
			Number(parseFloat(String(this.category7Matching)).toFixed(2)),
			Number(parseFloat(String(this.category8Matching)).toFixed(2)),
		];

		return list;
	}

	public getDesign() {
		const list = [
			Number(parseFloat(String(this.category1Design)).toFixed(2)),
			Number(parseFloat(String(this.category2Design)).toFixed(2)),
			Number(parseFloat(String(this.category3Design)).toFixed(2)),
			Number(parseFloat(String(this.category4Design)).toFixed(2)),
			Number(parseFloat(String(this.category5Design)).toFixed(2)),
			Number(parseFloat(String(this.category6Design)).toFixed(2)),
			Number(parseFloat(String(this.category7Design)).toFixed(2)),
			Number(parseFloat(String(this.category8Design)).toFixed(2)),
		];

		return list;
	}

	public getCommercial() {
		const list = [
			Number(parseFloat(String(this.category1Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category2Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category3Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category4Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category5Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category6Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category7Commercial)).toFixed(2)),
			Number(parseFloat(String(this.category8Commercial)).toFixed(2)),
		];

		return list;
	}

	public analysisProcesses() {
		for (let i = 0; i < 4; i++) {
			let constant = null;

			if (i === 0) {
				constant = IdeationConst;
			} else if (i === 1) {
				constant = MatchingConst;
			} else if (i === 2) {
				constant = DesignConst;
			} else {
				constant = CommercialConst;
			}

			this.reports[0].data.push(
				this.classificationText(constant[0].value, this.category1)
			);
			this.reports[1].data.push(
				this.classificationText(constant[1].value, this.category2)
			);
			this.reports[2].data.push(
				this.classificationText(constant[2].value, this.category3)
			);
			this.reports[3].data.push(
				this.classificationText(constant[3].value, this.category4)
			);
			this.reports[4].data.push(
				this.classificationText(constant[4].value, this.category5)
			);
			this.reports[5].data.push(
				this.classificationText(constant[5].value, this.category6)
			);
			this.reports[6].data.push(
				this.classificationText(constant[6].value, this.category7)
			);
			this.reports[7].data.push(
				this.classificationText(constant[7].value, this.category8)
			);
		}
	}

	private classificationText(constant: number, average: number): string {
		let str = null;
		const halfReady = 0.32;
		const almostReady = 0.66;
		const ready = 0.83;

		if (average >= constant || (constant === 3 && average >= ready * 3)) {
			str = 'Ready';
		} else if (average > almostReady * constant && average < constant) {
			str = 'Almost Ready';
		} else if (
			average > halfReady * constant &&
			average <= almostReady * constant
		) {
			str = 'Half Ready';
		} else {
			str = 'Unprepared';
		}

		return str;
	}
}
