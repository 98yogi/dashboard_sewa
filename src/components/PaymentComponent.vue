<template>
  <div class="box">
  	  <canvas :id="elm" height="138"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js/auto';

export default {
	data() {
		return{
			elm: 'myChart',
		}
	},
	methods: {
		initChart () {
			const config = {
				type:'bar',
				data: {
					labels: [
						'2017',
						'2018',
						'2019',
						'2020',
						'2021',
						'2022'
					],
					datasets: [
					{
						label: "Pokok",
						backgroundColor: "rgb(65, 212, 84, 0.2)",
						borderColor: "rgb(52, 172, 68)",
						data: [12, 21, 37, 28, 27, 21],
						borderWidth: 1
					},
					{
						label: "Dimuka",
						backgroundColor: "rgb(60, 200, 224, 0.2)",
						borderColor: "rgb(60, 200, 224)",
						data: [12, 21, 37, 28, 27, 21],
						borderWidth: 1
					},
					{
						label: "Tunggakan",
						backgroundColor: "rgb(224, 171, 24, 0.2)",
						borderColor: "rgb(224, 171, 24)",
						data: [12, 21, 37, 28, 27, 21],
						borderWidth: 1
					},
					{
						label: "Denda",
						backgroundColor: "rgb(207, 56, 56, 0.2)",
						borderColor: "rgb(207, 56, 56)",
						data: [12, 21, 37, 28, 27, 21],
						borderWidth: 1
					},
					{
						type: 'line',
						label: "Jumlah Data",
						backgroundColor: "rgb(65, 212, 84)",
						borderColor: "rgb(65, 212, 84)",
						data: [41, 61, 87, 58, 57, 51],
						// borderWidth: 1
					}]
				},
				options: {
					
					// fill: true,
					tension: 0.3,
					plugins: {
						legend: {
							position: "bottom",
						}
					},
					animation: {
						delay: (context) => {
							let delay = 0;
							if (context.type === 'data' && context.mode) {
							delay = context.dataIndex * 300 + context.datasetIndex * 100;
							}
							return delay;
						},
					},
				},

			}
			new Chart(
				document.getElementById('myChart'),
				config
			)
		}
	},
	mounted() {
		this.initChart()
	}
}
</script>
