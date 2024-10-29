import axios from "axios";

import { Loading } from "quasar";
import errors from "./errors";
const API = import.meta.env.VITE_API;

const loadFunction = config => {
  Loading.show();
  return config;
};

const finishFunction = response => {
  Loading.hide();
  return response;
};

const errorFunction = error => {
  Loading.hide();
  errors.errors(error);
  return Promise.reject(error);
};

const api = axios.create({
  baseURL: API
});

api.interceptors.request.use(loadFunction);

api.interceptors.response.use(finishFunction, errorFunction);

export default api;
