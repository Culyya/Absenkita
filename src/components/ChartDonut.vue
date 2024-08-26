<template>
    <div class="chart-donut-container">
      <canvas ref="donutChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs';
  
  export default {
    extends: Doughnut,
    props: {
      chartData: {
        type: Object, // Tipe data harus sesuai dengan yang Anda gunakan
        required: true,
      },
      chartOptions: {
        type: Object,
        default: () => ({}),
      },
    },
    mounted() {
      this.renderDonutChart();
    },
    methods: {
      renderDonutChart() {
        this.renderChart(this.chartData, this.chartOptions);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .chart-donut-container {
    text-align: center;
  }
  </style>
  