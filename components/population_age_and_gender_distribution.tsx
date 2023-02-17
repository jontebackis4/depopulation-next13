'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// type Options = {
// 	indexAxis: string,
// 	elements: {
// 		bar: {
// 			borderWidth: number,
// 		},
// 	},
// 	responsive: boolean,
// 	plugins: {
// 		legend: {
// 			position: 'right' | 'left' | 'top' | 'bottom',
// 		},
// 		title: {
// 			display: true,
// 			text: 'Chart.js Horizontal Bar Chart',
// 		},
// 	},
// }

export default function PopulationAgeAndGenderDistribution() {
	const options: ChartOptions = {
		indexAxis: 'x',
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Chart.js Horizontal Bar Chart',
			},
		},
	};

	// temporary
	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	// temporary
	const data: ChartData = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [-10, 20, 10, 30, -5, 10], //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	
	return (
		<>
			Todo:
			- Install react-chartjs-2
			- Add bar chart graph
			- Add state to see selected country
			<Bar options={options} data={data} />
		</>
	)
}