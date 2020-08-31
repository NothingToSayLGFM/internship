import firebase from "firebase/app";

const weather = {
  state: {
    weathers: null,
  },
  mutations: {
    setWeathers(state, weathers) {
      state.weathers = weathers.reverse();
    },
  },
  actions: {
    async createWeather({ dispatch }, weather) {
      try {
        await firebase
          .database()
          .ref("weathers")
          .push(weather);

        await dispatch("getAllWeathers");
      } catch {
        console.log("err");
      }
    },
    async getAllWeathers({ commit }) {
      try {
        const weathers =
          (
            await firebase
              .database()
              .ref("weathers")
              .once("value")
          ).val() || {};

        commit(
          "setWeathers",
          Object.keys(weathers).map((key) => ({
            id: key,
            ...weathers[key],
          }))
        );
      } catch {
        console.log("err");
      }
    },
    async removeWeather({ dispatch }, id) {
      try {
        firebase
          .database()
          .ref(`weathers/${id}`)
          .remove();
        await dispatch("getAllWeathers");
      } catch {
        console.log("err");
      }
    },
  },
};

export default weather;
