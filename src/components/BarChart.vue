<template>
  <div>
    <vue3-chart-js v-bind="{ ...barChart }" :style="myStyles" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: 'BarChart',
  components: {
    Vue3ChartJs,
  },
  setup() {
    const barChart = {
      type: "bar",
      data: {
        labels: ["20-02-2024", "20-02-2024", "20-02-2024", "20-02-2024", "20-02-2024", "20-02-2024", "20-02-2024", "20-02-2024","20-02-2024","20-02-2024","20-02-2024","20-02-2024"],
        datasets: [
          {
            label: 'Tidak Hadir/Cuti/Sakit/Izin',
            backgroundColor: ["#94A1FF", "#94A1FF", "#94A1FF", "#94A1FF", "#94A1FF", "#94A1FF", "#94A1FF", "#94A1FF","#94A1FF","#94A1FF","#94A1FF","#94A1FF"],
            data: [30, 10, 60, 50, 20, 60, 20, 40,20,60,20,40],
            borderRadius: 5,
            barThickness: 48,
          },
          {
            label: 'Hadir',
            backgroundColor: ["#606691", "#606691", "#606691", "#606691", "#606691", "#606691", "#606691", "#606691","#606691","#606691","#606691","#606691"],
            data: [80, 80, 80, 80, 80, 80, 80, 80,80,80,80,80],
            borderRadius: 5,
            barThickness: 48,
            lineTension: 0,
          },
        ],
      },
      options: {
        indexAxis: 'x',
        cutoutPercentage: 50,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            display: false,
            barPercentage: 0.8,
            categoryPercentage: 0.1,
            position: 'right',
          },
          y: {

            stacked: false,
            position: 'right',
            max: 100,
            min: 0,
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            
            labels: {
              display: true,
              font: {
              family: 'Poppins', 
              size: 12
            },
            
            },
          },
        },
      },
    };

    return {
      barChart,
    };
  },
};
</script>

<style scoped>
/* Tambahkan gaya CSS jika diperlukan */
</style>
