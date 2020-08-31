<template>
  <div class="card-wrap">
    <div class="country-list-wrap">
      <div v-if="weathers === null">
        <Spinner />
      </div>
      <div v-else-if="weathers.length === 0">
        <h2 class="no-records-title">
          No Records (Add some Place/City/Country)
        </h2>
      </div>
      <ul class="country-list row" v-else>
        <li
          class="list-item col-lg-5 col-md-10 col-sm-10"
          v-for="data in weathers"
          :key="data.id"
        >
          <div class="info">
            <p class="list-data list-country">
              {{ data.name }}, {{ data.country }}
            </p>
            <div class="row data-group">
              <p class="list-data list-temp col-lg-4">
                <fa-icon icon="temperature-high" size="4x" color="#fff" />
                <br />
                <span>{{ data.temp }}°c</span>
              </p>
              <p class="list-data list-rcs col-lg-4">
                <fa-icon
                  icon="cloud-rain"
                  size="4x"
                  color="#fff"
                  v-if="data.main === 'Rain'"
                />
                <fa-icon
                  icon="cloud-sun"
                  size="4x"
                  color="#fff"
                  v-if="data.main === 'Clouds'"
                />
                <fa-icon
                  icon="smog"
                  size="4x"
                  color="#fff"
                  v-if="data.main === 'Mist'"
                />
                <fa-icon
                  icon="sun"
                  size="4x"
                  color="#f58410"
                  v-if="data.main === 'Clear'"
                />
                <br />
                <span>{{ data.main }} ({{ data.desc }})</span>
              </p>
              <p class="list-data list-rcs col-lg-4">
                <fa-icon icon="cloud" size="4x" color="#fff" />
                <br />
                <span>{{ data.clouds }}%</span>
              </p>
            </div>
            <div class="row data-group">
              <p class="list-data list-rcs col-lg-4">
                <fa-icon icon="wind" size="4x" color="#fff" />
                <br />
                <span>{{ data.windSpeed }} m/s</span>
              </p>
              <p class="list-data list-rcs col-lg-4">
                <fa-icon icon="compress-arrows-alt" size="4x" color="#fff" />
                <br />
                <span>{{ data.pressure }}mmHg</span>
              </p>
              <p class="list-data list-rcs col-lg-4">
                <fa-icon icon="hand-holding-water" size="4x" color="#fff" />
                <br />
                <span>{{ data.humidity }}%</span>
              </p>
            </div>
          </div>
          <a href="#" class="card-close" @click="removeWeather(data.id)">
            <fa-icon icon="times" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Spinner from "./Spinner";
export default {
  name: "PlaceList",
  components: {
    Spinner: Spinner,
  },
  computed: {
    weathers() {
      return this.$store.state.weather.weathers;
    },
  },
  mounted() {
    this.$store.dispatch("getAllWeathers");
  },
  methods: {
    removeWeather(id) {
      this.$store.dispatch("removeWeather", id);
    },
  },
};
</script>
