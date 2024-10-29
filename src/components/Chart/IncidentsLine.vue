<template>
  <LineChartGenerator
    :options="chartOptions"
    :data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>
    
    <script>
//Library
import dayjs from "dayjs";
require("dayjs/locale/es");

import { Line as LineChartGenerator } from "vue-chartjs";
import { mapActions } from "vuex";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "IncidentsLine",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
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
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    val_search: {
      type: Boolean,
      default: false,
    },
    typeinc: {
      type: String,
      default: "",
    },
    recordtype: {
      type: String,
      default: "",
    },
    fecha_inicio: {
      type: String,
      default: "",
    },
    fecha_fin: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      date: new Date(),
      etiquetas: [],
      record_incidents: [],
      chartData: {
        labels: [],
        datasets: [{}],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    ...mapActions({
      chartIncidents: "_incidents/barIncidents",
    }),
    async cargarTotalIncidencias() {
      this.record_incidents = [];
      this.etiquetas = [];

      let parametros = {
        typeinc: this.typeinc == null ? "" : this.typeinc,
        recordtype: this.recordtype == null ? "" : this.recordtype,
        fecha_inicio:
          this.fecha_inicio == ""
            ? dayjs(this.date).format("YYYY-MM-DD")
            : this.fecha_inicio,
        fecha_fin:
          this.fecha_fin == ""
            ? dayjs(this.date).format("YYYY-MM-DD")
            : this.fecha_fin,
      };
      let res = await this.chartIncidents(parametros);
      const record_incidents = res;

      if (record_incidents != null) {
        record_incidents.map(
          (row) => (
            this.etiquetas.push(row.dia), this.record_incidents.push(row.total)
          )
        );
      }

      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {
            label: "Incidencias",
            backgroundColor: "#9C27B0",
            borderColor: "#9C27B0",
            data: this.record_incidents,
          },
        ],
      };
    },
  },
  watch: {
    typeinc() {
      if (this.val_search) {
        this.cargarTotalIncidencias();
      }
    },
    recordtype() {
      if (this.val_search) {
        this.cargarTotalIncidencias();
      }
    },
    fecha_inicio() {
      if (this.val_search) {
        this.cargarTotalIncidencias();
      }
    },
    fecha_fin() {
      if (this.val_search) {
        this.cargarTotalIncidencias();
      }
    },
  },
  mounted() {
    this.cargarTotalIncidencias();
  },
};
</script>
    