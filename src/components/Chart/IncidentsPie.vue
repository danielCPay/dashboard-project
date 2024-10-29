<template  >
  <div v-if="etiquetas.length == 0">
    <v-card
      align="center"
      height="400px"
      elevation="0"
      class="d-flex align-content-center flex-wrap"
    >
      <div>
        <v-img height="100px" width="100px" src="img/no-result.png"></v-img>

        <v-card-title
          >No existen registros de Incidencias por Tipo segun el filtro
          seleccionado.</v-card-title
        >

        <v-card-subtitle>
          <span class="me-1">Por favor Seleccione otro tipo de Filtro.</span>
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
  <div v-else>
    <Pie
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
  </div>
</template>
        <script>
//Library
import dayjs from "dayjs";
require("dayjs/locale/es");

import { Pie } from "vue-chartjs";

import { mapActions } from "vuex";
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
  name: "IncidentsPie",
  components: { Pie },
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
            text: "RECORD DE INCIDENCIAS POR TIPO",
            color: "#42A5F5",
          },
        },
      },
    };
  },
  methods: {
    ...mapActions({
      chartIncidents: "_incidents/pieIncidents",
    }),
    async cargarTotalIncidencias() {
      this.valores = [];
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
            this.etiquetas.push(row.typeinc), this.valores.push(row.total)
          )
        );
      }

      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {
            label: "Incidencias",
            backgroundColor: ["#E91E63", "#9C27B0", "#F44336", "#f87925"],
            data: this.valores,
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