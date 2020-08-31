<template>
  <div class="add-from">
    <form @submit.prevent="createWeather">
      <div class="row">
        <div class="col-lg-8">
          <div class="add-box">
            <input
              type="text"
              class="add-bar"
              :class="isEmpty ? 'invalid-from' : ''"
              placeholder="input city"
              v-model="place"
            />
            <small v-if="isEmpty" class="empty-form">
              field cannot be empty</small
            >
          </div>
        </div>
        <div class="col-lg-4">
          <button class="add-btn" type="submit">add city</button>
        </div>
      </div>
    </form>
    <transition name="fade">
      <div v-if="hasError" class="modal-overlay" @click="hasError = false">
        <AddFormError
          title="Incorrect data!"
          content="Please check the correctness of the entered data."
        />
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="isCityExist"
        class="modal-overlay"
        @click="isCityExist = false"
      >
        <AddFormError
          title="Incorrect data!"
          content="This place does already exist."
        />
      </div>
    </transition>
  </div>
</template>

<script>
import AddFormError from "./AddFormHasError";

export default {
  name: "AddForm",
  components: {
    AddFormError: AddFormError,
  },
  data: () => ({
    place: "",
    hasError: false,
    isEmpty: false,
    isCityExist: false,
  }),
  watch: {
    place(value) {
      this.isEmpty = !value;
    },
  },
  methods: {
    async createWeather() {
      if (this.place === "") {
        this.isEmpty = true;
        return;
      }

      const weathers = this.$store.state.weather.weathers;
      const isCityExist = weathers.find(
        (weahter) => weahter.name === this.place
      );

      if (isCityExist) {
        this.isCityExist = true;
        this.place = "";
        return;
      }

      try {
        const weather = await this.$store.dispatch(
          "generateWeatherFromPlace",
          this.place
        );
        await this.$store.dispatch("createWeather", weather);
        this.place = "";
        this.hasError = false;
        this.$nextTick(() => (this.isEmpty = false));
      } catch (err) {
        this.place = "";
        this.hasError = true;
      }
    },
  },
};
</script>
