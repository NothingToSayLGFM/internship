<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  mounted() {
    window.addEventListener("storage", (event) => {
      if (event.key !== "@@" && event.key === "vuex") {
        let items = JSON.parse(event.newValue);
        if (items.cart) {
          if (items.cart.cartItems) {
            // this.setCurrentState(items.cart.cartItems);
            console.log("str");
            return;
          } else {
            console.log("no cart Itmes", items.cart);
          }
        } else {
          console.log("no cart");
        }
        console.log(items);
      }
    });
  },
};
</script>
