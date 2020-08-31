<template>
  <div class="current-weather">
    <div v-if="currentGeoLocation === null">
      <Spinner />
    </div>
    <div class="weather-wrap" v-else-if="currentGeoLocation.name">
      <div class="location-box">
        <div class="location">
          {{ currentGeoLocation.name }}, {{ currentGeoLocation.sys.country }}
        </div>
        <div class="date">{{ today }}</div>
      </div>
      <div class="weather-box">
        <div class="temp">
          {{ Math.round(convertKelvin(currentGeoLocation.main.temp)) }}°с
        </div>
        <div class="weather">{{ currentGeoLocation.weather[0].main }}</div>
      </div>
    </div>
    <div class="weather-wrap" v-else-if="currentGeoLocation.main == 'Shutdown'">
      <div class="weather-box">
        <div class="temp shutdown">
          <p>geolocation disabled</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import convertKelvin from "../utils/convertKelvin";
import Spinner from "./Spinner";
import * as moment from "moment/moment";

export default {
  name: "CurrentGeoLocation",
  components: {
    Spinner: Spinner,
  },
  data: () => ({
    today: moment().format("dddd, DD MMMM YYYY"),
  }),
  props: ["currentGeoLocation"],
  methods: {
    convertKelvin,
  },
};
</script>
