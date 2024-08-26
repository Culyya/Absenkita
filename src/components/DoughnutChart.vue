<template>
  <div style="max-width: 350px">
    <vue3-chart-js v-bind="{ ...doughnutChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
  name: 'DoughnutChart',
  components: {
    Vue3ChartJs,
  },
  setup() {
    const doughnutChart = {
      type: "doughnut",
      data: {
        labels: ["Tidak Hadir", "Ijin", "Masuk"],
        datasets: [
          {
            backgroundColor: ["#E96A6A", "#FDDE7F", "#95DE8E"],
            data: [40, 20, 80],
          },
        ],
      },
    };

    return {
      doughnutChart,
    };
  },
}
</script>


