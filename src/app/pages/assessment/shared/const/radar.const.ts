import { ChartOptions, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

/* Radar Chart */
export const RadarChartLabelConst: Label[] = [
	'Growth Virtues',
	'Effectual Creativity',
	'Technical Domain Spesific',
	'Responsive Teamwork',
	'Value-base dynamic organizing',
	'Long-term oriented Networking',
	'Cultural Empathy',
	'Intergenerational safety facilitation',
];

export const RadarChartConst: RadialChartOptions = {
	responsive: true,
	legend: {
		display: false,
		position: 'top',
	},
	scale: {
		ticks: {
			beginAtZero: true,
			max: 100,
			min: 0,
			stepSize: 20,
		},
	},
	tooltips: {
		enabled: true,
		callbacks: {
			title: function (tooltipItem) {
				const labelManual = RadarChartLabelConst;
				return labelManual[tooltipItem[0].index];
			},
			label: function (tooltipItem, data) {
				return (
					data.datasets[tooltipItem.datasetIndex].label +
					' : ' +
					data.datasets[tooltipItem.datasetIndex].data[
						tooltipItem.index
					]
				);
			},
		},
	},
};

export const RadarChartReportConst: RadialChartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	legend: {
		display: false,
		position: 'top',
	},
	scale: {
		ticks: {
			beginAtZero: true,
			max: 100,
			min: 0,
			stepSize: 20,
		},
	},
	tooltips: {
		enabled: true,
		callbacks: {
			title: function (tooltipItem) {
				const labelManual = RadarChartLabelConst;
				return labelManual[tooltipItem[0].index];
			},
			label: function (tooltipItem, data) {
				return (
					data.datasets[tooltipItem.datasetIndex].label +
					' : ' +
					data.datasets[tooltipItem.datasetIndex].data[
						tooltipItem.index
					]
				);
			},
		},
	},
};

export const RadarChartDarkThemeConst = {
	legend: {
		labels: { fontColor: 'white' },
	},
	scales: {
		xAxes: [
			{
				ticks: { fontColor: 'white' },
				gridLines: { color: 'rgba(255,255,255,0.1)' },
			},
		],
		yAxes: [
			{
				ticks: { fontColor: 'white' },
				gridLines: { color: 'rgba(255,255,255,0.1)' },
			},
		],
	},
};

export const RadarChartLightThemeConst = {};

/* Bar Chart */
export const BarChartLabelsConst: Label[] = [
	'Growth Virtues',
	'Effectual Creativity',
	'Technical Domain Specific',
	'Responsive Teamwork',
	'Value-based dynamic organizing',
	'Long-term oriented Networking',
	'Cultural Empathy',
	'Intergenerational safety facilitation',
];

export const BarChartOptionsConst: ChartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	// We use these empty structures as placeholders for dynamic theming.
	scales: {
		xAxes: [{}],
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					stepSize: 1,
					max: 3,
				},
			},
		],
	},
	plugins: {
		datalabels: {
			anchor: 'end',
			align: 'end',
			display: false,
		},
	},
	tooltips: {
		enabled: true,
		callbacks: {
			title: function (tooltipItem) {
				const labelManual = BarChartLabelsConst;
				return labelManual[tooltipItem[0].index];
			},
			label: function (tooltipItem, data) {
				return (
					data.datasets[tooltipItem.datasetIndex].label +
					' : ' +
					data.datasets[tooltipItem.datasetIndex].data[
						tooltipItem.index
					]
				);
			},
		},
	},
};
