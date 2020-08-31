<template>
  <div class="payment-wrap">
    <div class="payment-modal__body">
      <div class="payment-modal__body--title">
        <span class="title-close" @click="close">
          <b-img :src="closeTime"></b-img>
        </span>
        <h4>Card</h4>
      </div>
      <div class="form-wrap">
        <div class="form-container">
          <form
            id="payment-form"
            method="POST"
            action="https://merchant.com/charge-card"
          >
            <div class="inp-bg">
              <label for="card-number">Card number</label>
              <div class="input-container card-number">
                <div class="card-number-frame"></div>
              </div>
              <div class="date-and-code">
                <div>
                  <label for="expiry-date">Expires</label>
                  <div class="input-container expiry-date">
                    <div class="expiry-date-frame"></div>
                  </div>
                </div>
                <div>
                  <label for="cvv">CVV</label>
                  <div class="input-container cvv">
                    <div class="cvv-frame"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bnt-wrap d-flex justify-content-center">
              <button id="pay-button" disabled>
                <b-img class="byu-btn" :src="buyBtn"></b-img>
                <span>Pay</span>
                <span>#{{ totalPrice }}</span>
              </button>
            </div>
            <div>
              <span class="error-message error-message__card-number"></span>
              <span class="error-message error-message__expiry-date"></span>
              <span class="error-message error-message__cvv"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formImage from "../../assets/img/credit-cart-pl.png";
import buyBtn from "../../assets/img/buy-button.png";
import checkMark from "../../assets/img/checkmark.png";
import closeTime from "../../assets/img/close-time.png";

export default {
  name: "PaymentModal",
  data: () => ({
    formImage,
    buyBtn,
    checkMark,
    closeTime,
  }),
  computed: {
    totalPrice() {
      return this.$store.state.cart.totalPrice;
    },
  },
  mounted() {
    var payButton = document.getElementById("pay-button");
    var form = document.getElementById("payment-form");

    window.Frames.init({
      publicKey: process.env.VUE_APP_PUBLIC_KEY,
      style: {
        base: {
          fontSize: "1rem",
          border: "none",
          color: "#fff",
        },
        invalid: {
          color: "red",
        },
      },
    });

    var errors = {};
    errors["card-number"] = "Please enter a valid card number";
    errors["expiry-date"] = "Please enter a valid expiry date";
    errors["cvv"] = "Please enter a valid cvv code";

    window.Frames.addEventHandler(
      window.Frames.Events.FRAME_VALIDATION_CHANGED,
      onValidationChanged
    );
    function onValidationChanged(event) {
      var e = event.element;

      if (event.isValid || event.isEmpty) {
        if (e === "card-number" && !event.isEmpty) {
          showPaymentMethodIcon();
        }
        clearErrorMessage(e);
      } else {
        if (e === "card-number") {
          clearPaymentMethodIcon();
        }
        setErrorMessage(e);
      }
    }

    function clearErrorMessage(el) {
      var selector = ".error-message__" + el;
      var message = document.querySelector(selector);
      message.textContent = "";
    }

    function showPaymentMethodIcon(parent) {
      if (parent) parent.classList.add("show");
    }

    function clearPaymentMethodIcon(parent) {
      if (parent) parent.classList.remove("show");
    }

    function setErrorMessage(el) {
      var selector = ".error-message__" + el;
      var message = document.querySelector(selector);
      message.textContent = errors[el];
    }

    window.Frames.addEventHandler(
      window.Frames.Events.CARD_VALIDATION_CHANGED,
      cardValidationChanged
    );
    function cardValidationChanged() {
      payButton.disabled = !window.Frames.isCardValid();
    }

    window.Frames.addEventHandler(
      window.Frames.Events.CARD_TOKENIZATION_FAILED,
      onCardTokenizationFailed
    );
    function onCardTokenizationFailed(error) {
      console.log("CARD_TOKENIZATION_FAILED: %o", error);
      window.Frames.enableSubmitForm();
    }
    let onCardTokenized = (event) => {
      this.$store.dispatch("setToken", event.token);
    };
    window.Frames.addEventHandler(
      window.Frames.Events.CARD_TOKENIZED,
      onCardTokenized
    );

    window.Frames.addEventHandler(
      window.Frames.Events.PAYMENT_METHOD_CHANGED,
      paymentMethodChanged
    );
    function paymentMethodChanged(event) {
      var pm = event.paymentMethod;
      let container = document.querySelector(".icon-container.payment-method");

      if (!pm) {
        clearPaymentMethodIcon(container);
      } else {
        showPaymentMethodIcon(container, pm);
      }
    }

    form.addEventListener("submit", onSubmit);
    function onSubmit(event) {
      event.preventDefault();
      window.Frames.submitCard();
    }
  },
  methods: {
    close() {
      this.$store.dispatch("showPaymentModal", "close");
      document.getElementById("body").classList.remove("hidden");
    },
  },
};
</script>
