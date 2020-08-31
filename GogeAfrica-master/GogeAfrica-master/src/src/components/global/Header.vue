<template>
  <header>
    <b-container class="header-container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand to="/">
          <b-img :src="logo"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" active-class="active">Home</b-nav-item>
            <b-nav-item :to="{ name: 'CoursePage' }" active-class="active"
              >Coctails</b-nav-item
            >
            <b-nav-item href="#" active-class="active">Blog</b-nav-item>
            <b-nav-item href="#" active-class="active">About Us</b-nav-item>
            <b-nav-item href="#" active-class="active">Contact Us</b-nav-item>
          </b-navbar-nav>

          <div class="navbar-buttons">
            <b-button class="navbar-cart" :to="{ name: 'CartPage' }">
              <div>
                <b-img :src="cart"></b-img>
              </div>
              <span class="navbar-cart-count">{{ cartCount }}</span>
            </b-button>
            <b-button class="navbar-button orange-gradient-button"
              >Be A Contributor</b-button
            >
            <b-button class="navbar-button orange-gradient-button"
              >Log in</b-button
            >
          </div>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

import logo from "../../assets/img/logo.png";
import cart from "../../assets/img/cart.png";

export default {
  name: "Header",
  data: () => ({
    logo,
    cart,
  }),
  computed: mapGetters(["cartCount"]),
};
</script>
