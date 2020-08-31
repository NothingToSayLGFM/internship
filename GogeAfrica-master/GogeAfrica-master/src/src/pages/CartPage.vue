<template>
  <section class="cart">
    <b-container class="cart--wrapper">
      <b-button class="cart__back-button" @click="back">
        <b-img :src="backImg" alt="back-img"></b-img>
        <span>Back</span>
      </b-button>
      <div class="cart__table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th width="533px" scope="col">Product Name & Details</th>
              <th width="220px" scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-if="cartItems.length > 0">
            <tr v-for="item in cartItems" :key="item.idDrink">
              <th scope="row">
                <b-row class="cart__table--row">
                  <div class="cart__table--image">
                    <b-img :src="item.strDrinkThumb"></b-img>
                  </div>
                  <div class="cart__table--text">
                    <p class="series">{{item.strDrink}}</p>
                    <p class="date">{{item.dateModified}}</p>
                  </div>
                </b-row>
              </th>
              <td>
                <div class="cart__table--number">
                  <button @click="stepDown(item)">-</button>
                  <input class="quantity" min="0" name="quantity" :value="item.count" type="number" />
                  <button @click="stepUp(item)" class="plus">+</button>
                </div>
              </td>
              <td>
                <p class="cart__table--price">${{item.idDrink}}</p>
              </td>
              <td class="total-row">
                <div class="cart__table--total">
                  <span class="total">Total:</span>
                  <span class="total-price">${{item.price}}</span>
                </div>
              </td>
              <td>
                <div class="cart__table--close">
                  <b-button v-b-modal.remove-modal @click="removeItem(item)">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5986 2L2.90332 16.6953"
                        stroke="#FFC000"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.90332 2L17.5986 16.6953"
                        stroke="#FFC000"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </b-button>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody class="nothing-in-cart" v-else>
            <h3>Nothing in Cart</h3>
          </tbody>
        </table>
      </div>
      <div class="cart__button-buy">
        <div>
          <p class="cart--total-price">
            Total:
            <span class="price">${{totalPrice}}</span>
          </p>
          <b-button
            :to="{ name: 'DeliveryPage' }"
            @click="setTotal"
            :disabled="totalPrice < 1"
            class="orange-gradient-button"
          >Buy All</b-button>
        </div>
      </div>
    </b-container>
    <RemoveModal />
  </section>
</template>

<script>
import backImg from "../assets/img/back.png";
import RemoveModal from "../components/modals/RemoveModal";

export default {
  name: "Cart",
  components: { RemoveModal },
  data: () => ({
    backImg
  }),
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].price;
      }
      return total;
    }
  },
  methods: {
    setTotal() {
      this.$store.dispatch("setTotalPrice", this.totalPrice);
    },
    back() {
      this.$router.go(-1);
    },
    stepDown(cocktail) {
      this.$store.dispatch("minusContItemInCart", cocktail);
    },
    stepUp(cocktail) {
      this.$store.dispatch("plusContItemInCart", cocktail);
    },

    removeItem(data) {
      this.$store.dispatch("removeCartItem", data);
    }
  }
};
</script>
