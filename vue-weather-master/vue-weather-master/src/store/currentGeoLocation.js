import { api_key, url_base } from "../utils/constans";

const currentGeoLocation = {
  state: {
    currentGeoLocation: null,
  },
  mutations: {
    setCurrentGeoLocation(state, currentGeoLocation) {
      state.currentGeoLocation = currentGeoLocation;
    },
  },
  actions: {
    getCurrentGeoLocation({ commit }) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      const success = async (pos) => {
        const crd = pos.coords;
        try {
          const res = await fetch(
            `${url_base}weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${api_key}`
          );
          const data = await res.json();
          commit("setCurrentGeoLocation", data);
        } catch (err) {
          console.log("err");
        }
      };
      const error = (err) => {
        commit("setCurrentGeoLocation", { main: "Shutdown" });
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    },
  },
};

export default currentGeoLocation;
