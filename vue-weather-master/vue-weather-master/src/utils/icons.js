import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTemperatureHigh,
  faCloudRain,
  faHandHoldingWater,
  faCloud,
  faWind,
  faCompressArrowsAlt,
  faSun,
  faTimes,
  faCloudSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTemperatureHigh,
  faCloudRain,
  faHandHoldingWater,
  faCloud,
  faWind,
  faCompressArrowsAlt,
  faSun,
  faTimes,
  faCloudSun,
  faSmog
);

Vue.component("fa-icon", FontAwesomeIcon);
