<template>
  <div id="app" :class="warmClass">
    <main>
      <div class="container">
        <h1 class="app-title">VueJS Weather App</h1>
        <AddForm />
        <CurrentGeoLocation :currentGeoLocation="currentGeoLocation" />
        <PlaceList />
      </div>
    </main>
  </div>
</template>

<script>
import CurrentGeoLocation from "./components/СurrentGeoLocation";
import PlaceList from "./components/PlaceList";
import AddForm from "./components/AddForm";
import convertKelvin from "./utils/convertKelvin";

export default {
  name: "App",
  components: {
    CurrentGeoLocation,
    PlaceList,
    AddForm,
  },
  computed: {
    currentGeoLocation() {
      return this.$store.state.currentGeoLocation.currentGeoLocation;
    },
    warmClass() {
      return {
        warm:
          this.currentGeoLocation !== null &&
          convertKelvin(this.currentGeoLocation.main.temp) > 16,
      };
    },
  },
  mounted() {
    this.getCurrentGeoLocation();
  },
  methods: {
    getCurrentGeoLocation() {
      this.$store.dispatch("getCurrentGeoLocation");
    },
    convertKelvin,
  },
};
</script>
