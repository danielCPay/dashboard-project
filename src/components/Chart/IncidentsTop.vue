<template>
  <v-data-table
    :headers="headers"
    :items="incidents_list"
    :hide-default-footer="true"
    dense
    class="elevation-1"
  >
    <template v-slot:[`no-results`]>
      <span>No se encontraron registros</span>
    </template>
    <template v-slot:no-data>
      <span>No se encontraron registros</span>
    </template>
  </v-data-table>
</template>

<script>
//Library
import dayjs from "dayjs";
require("dayjs/locale/es");

import { mapActions } from "vuex";
export default {
  props: {
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
  data: () => ({
    date: new Date(),
    incidents_list: [],
    headers: [
      {
        text: "MOTIVO",
        align: "start",
        sortable: false,
        value: "motive",
      },
      { text: "TOTAL", sortable: false, value: "total" },
    ],
  }),
  methods: {
    ...mapActions({
      getIncidents: "_incidents/topIncidents",
    }),
    async loadIncidents() {
      let data = [];
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
      data = await this.getIncidents(parametros);

      if (data != null) {
        this.incidents_list = data;
      }
    },
  },
  watch: {
    typeinc() {
      if (this.val_search) {
        this.loadIncidents();
      }
    },
    recordtype() {
      if (this.val_search) {
        this.loadIncidents();
      }
    },
    fecha_inicio() {
      if (this.val_search) {
        this.loadIncidents();
      }
    },
    fecha_fin() {
      if (this.val_search) {
        this.loadIncidents();
      }
    },
  },
  mounted() {
    this.loadIncidents();
  },
};
</script>

<style>
</style>