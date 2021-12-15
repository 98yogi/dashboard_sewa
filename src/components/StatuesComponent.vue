<template>
	<div class="box">
  	  <canvas :id="render"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
	data() {
		return {
			render: "statues"
		}
	},

	methods: {
		initChart() {
			const config = {
				type: 'pie',
				data: {
					labels: [
						'Berijin',
						'Ditangguhkan',
						'Dicabut',
						'Dilepas',
						'Sengketa',
					],

					datasets: [{
						data: [300, 50, 100, 299, 90],
						backgroundColor: [
						'rgb(38, 224, 63)',
						'rgb(45, 63, 212)',
						'rgb(255, 205, 86)',
						'rgb(238, 168, 88)',
						'rgb(207, 56, 56)',
						],
						hoverOffset: 20,
						borderWidth: 0,
						offset: 0,
					}],
				},
				options: {	

					plugins: {
						legend: {
							position: "bottom",
						}
					},
				}
			}
			new Chart(
				document.getElementById('statues'),
				config
			)
		}
	},
	mounted() {
		this.initChart()
	}
}

</script>
