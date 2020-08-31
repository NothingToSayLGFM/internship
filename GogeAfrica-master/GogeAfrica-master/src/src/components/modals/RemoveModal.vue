<template>
  <div class="remove-modal-wrap">
    <b-modal
      ref="removeModal"
      id="remove-modal"
      hide-header
      hide-footer
      hide-header-close
      modal-class="remove-modal"
    >
      <div class="remove-modal--close">
        <b-button @click="close">
          <b-img :src="Closemodal" alt="close"></b-img>
        </b-button>
      </div>
      <div class="remove-modal__body">
        <div class="remove-modal__body--image">
          <b-img :src="image" alt="image"></b-img>
        </div>
        <div class="remove-modal__body--text">
          <h3>Remove / Cancel Order</h3>
          <p>You’re about to cancel ya order and this will also remove the item from your cart either</p>
        </div>
        <b-button class="orange-gradient-button" @click="confirmRemove">Proceed</b-button>
      </div>
    </b-modal>
  </div>
</template>


<script>
import Closemodal from "../../assets/img/Close-modal.png";
import image from "../../assets/img/220.png";

export default {
  name: "RemoveModal",
  data: () => ({
    Closemodal,
    image
  }),
  methods: {
    close() {
      this.$refs.removeModal.hide();
    },
    confirmRemove() {
      this.$store.dispatch("confirmRemoveItem");
      this.$refs.removeModal.hide();
    }
  }
};
</script>