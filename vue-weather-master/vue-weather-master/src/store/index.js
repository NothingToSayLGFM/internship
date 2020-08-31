import Vue from "vue";
import Vuex from "vuex";
import weather from "./weather";
import currentGeoLocation from "./currentGeoLocation";
import { api_key, url_base } from "../utils/constans";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async generateWeatherFromPlace(_, place) {
      try {
        const res = await fetch(
          `${url_base}weather?q=${place}&units=metric&APPID=${api_key}`
        );
        const data = await res.json();
        if (data.cod !== "404") {
          return {
            name: data.name,
            country: data.sys.country,
            temp: Math.round(data.main.temp),
            main: data.weather[0].main,
            desc: data.weather[0].description,
            windSpeed: data.wind.speed,
            clouds: data.clouds.all,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
          };
        } else {
          throw new Error("Place/Country does not exists");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  modules: {
    weather: weather,
    currentGeoLocation: currentGeoLocation,
  },
});
