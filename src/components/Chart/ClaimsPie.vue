<template>
  <Pie :options="chartOptions" :data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins"
    :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
<script>

import { Notify } from 'quasar';
import { Pie } from "vue-chartjs";
import Dashboard from "../../models/Dashboard.js";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  registerables
} from "chart.js";

import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar componentes y plugins de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, ...registerables, ChartDataLabels);

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
      default: 850,
    },
    height: {
      type: Number,
      default: 550,
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
  components: { Pie, },
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
          datalabels: {
            color: '#fff',
            anchor: 'center',
            align: 'end',
            font: {
              weight: 'bold',
              size: 12,
            },
            formatter: (value) => `${value}`,
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
            //backgroundColor: ["#E91E63", "#9C27B0", "#F44336", "#f87925"],
            data: this.valores,
          },
        ],
      };
    },

    async processClaimsDashboardInsert() {
      try {
        const res = await Dashboard.claimsDashboardInsert({
          x_row_limit: 500
        });
        console.log(res);
        if (!res.error) {
          this.showSaveSuccess = true;
          this.show = false;
        } else {
          this.notifyWarning(res.message);
        }
      } catch (error) {
        console.dir(error);
      }
    },
    notifyWarning(message) {
      Notify.create({
        type: 'warning',
        message: message
      })
    },
  },
  watch: {

  },
  mounted() {
    this.processClaimsDashboardInsert();
    this.loadClaimsCountOnboardingStatus();

    setInterval(() => {
      console.log("Despues de 5 minutos");
      this.processClaimsDashboardInsert();
      this.loadClaimsCountOnboardingStatus();
    }, 300000); // Intervalo en milisegundos (5 segundos en este ejemplo)
  },
};
</script>