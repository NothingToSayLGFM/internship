<template>
  <div class="check-modal-wrap">
    <div class="check-modal__body">
      <div class="check-modal__body--image">
        <b-img :src="checkmark" alt="check"></b-img>
      </div>
      <p class="check-modal__body--text">
        <span class="d-block">Payment successful</span>
        {{ token }}
      </p>
      <div class="btn-wrap">
        <b-button class="check-modal__body--button" @click="close">Ok</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import checkmark from "../../assets/img/checkmark.png";

export default {
  name: "CheckModal",
  props: ["token"],
  data: () => ({
    checkmark,
  }),
  methods: {
    close() {
      this.$store.dispatch("showPaymentModal", "close");
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("clearCart");
      this.$router.push("cart");

      document.getElementById("body").classList.remove("hidden");
    },
  },
};
</script>
