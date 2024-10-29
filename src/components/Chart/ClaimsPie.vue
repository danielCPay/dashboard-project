<template>
  <Pie :options="chartOptions" :data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins"
    :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
<script>


import { Pie } from "vue-chartjs";
import Dashboard from "../../models/Dashboard.js";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => { },
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  name: "ClaimsPie",
  components: { Pie },
  data() {
    return {
      etiquetas: [],
      valores: [],
      chartData: {
        labels: [],
        datasets: [{}],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "CLAIMS ONBOARDING STATUS",
            color: "#42A5F5",
          },
        },
      },
    };
  },
  methods: {
    async loadClaimsCountOnboardingStatus() {
      this.valores = [];
      this.etiquetas = [];

      let res = await Dashboard.getClaimsCountOnboardingStatus();
      const record_incidents = res.data;
      console.log(res.data);
      if (record_incidents != null) {
        record_incidents.map(
          (row) => (this.etiquetas.push(row.onboarding_status), this.valores.push(row.count))
        );
      }

      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {
            label: "Claims",
            backgroundColor: ["#E91E63", "#9C27B0", "#F44336", "#f87925"],
            data: this.valores,
          },
        ],
      };
    },
  },
  watch: {

  },
  mounted() {
    this.loadClaimsCountOnboardingStatus();
  },
};
</script>