<template>
  <main class="delivery">
    <b-container class="delivery--wrapper">
      <b-button class="cart__back-button" :to="{ name: 'CartPage' }">
        <b-img :src="backImg" alt="back-img"></b-img>
        <span>Cart</span>
      </b-button>
      <section class="delivery__form--container">
        <h4 class="delivery__form--title">Select Your Delivery Information</h4>
        <div class="delivery__form--wrapper">
          <b-form class="delivery__form--form">
            <b-form-input
              type="text"
              required
              placeholder="Full Name"
              class="delivery__form--input"
              v-model="name"
            ></b-form-input>
            <b-form-input
              type="text"
              required
              placeholder="Country / Region"
              class="delivery__form--input"
              v-model="country"
            ></b-form-input>
            <b-form-input
              type="text"
              required
              placeholder="Street Address"
              class="delivery__form--input"
              v-model="address"
            ></b-form-input>
            <b-form-input
              type="text"
              required
              placeholder="City"
              class="delivery__form--input"
              v-model="city"
            ></b-form-input>
            <b-form-input
              type="text"
              required
              placeholder="State / Province / Region"
              class="delivery__form--input"
              v-model="state"
            ></b-form-input>
            <b-form-input
              type="text"
              required
              placeholder="Zip / Postal Code"
              class="delivery__form--input"
              v-model="code"
            ></b-form-input>
            <phone-mask-input
              v-model="phone"
              :autoDetectCountry="true"
              defaultCountry="us"
              wrapperClass="wrraper-example"
              placeholder="Mobile"
              inputClass="delivery__form--input form-control"
            />
            <b-button
              class="delivery__form--button"
              @click="goToPay"
              :disabled="!checkInputs"
              >Save and Ship To This Address</b-button
            >
          </b-form>
        </div>
      </section>
    </b-container>
    <transition name="fade">
      <PaymentModal v-if="showPaymentModal && !token" />
    </transition>
    <transition name="fade">
      <CheckModal v-if="token" :token="token" />
    </transition>
  </main>
</template>

<script>
import backImg from "../assets/img/back.png";
import PaymentModal from "../components/modals/PaymentModal";
import CheckModal from "../components/modals/CheckModal";
import PhoneMaskInput from "vue-phone-mask-input";

export default {
  name: "DeliveryPage",
  components: { PaymentModal, CheckModal, PhoneMaskInput },
  data: () => ({
    backImg,
    phone: "",
    city: "",
    code: "",
    state: "",
    country: "",
    address: "",
    name: "",
  }),
  computed: {
    showPaymentModal() {
      return this.$store.state.modals.showPaymentModal;
    },
    token() {
      return this.$store.state.modals.token;
    },
    checkInputs() {
      if (
        this.phone.length > 11 &&
        this.city &&
        this.code &&
        this.state &&
        this.country &&
        this.address &&
        this.name
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    goToPay() {
      this.$store.dispatch("showPaymentModal", "pay");
      document.getElementById("body").classList.add("hidden");
    },
  },
};
</script>
