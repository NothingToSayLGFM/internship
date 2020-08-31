<template>
  <b-container class="hero-wrapper">
    <div class="slider">
      <div class="main-slider">
        <slick ref="slick" :options="slickOptions">
          <div class="slide">
            <h2
              class="slide-title"
            >Get Access to Unlimited Educational Resources. Everywhere, Everytime!</h2>
            <p class="slide-text">
              premium access to more than 10,000 resources ranging from courses,
              events e.t.c.
            </p>
            <b-button class="orange-button">Get Access</b-button>
          </div>
          <div class="slide">
            <h2
              class="slide-title"
            >Get Access to Unlimited Educational Resources. Everywhere, Everytime!</h2>
            <p class="slide-text">
              premium access to more than 10,000 resources ranging from courses,
              events e.t.c.
            </p>
            <b-button class="orange-button">Get Access</b-button>
          </div>
        </slick>
        <div class="hero-slider-arrows">
          <b-button class="hero-slider-arrow" ref="prefslide" @click="prev">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.1665 0.633499L0.499837 6.00017L8.1665 11.3668V0.633499Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0.599504"
                  y1="0.893071"
                  x2="9.55748"
                  y2="2.77899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC000" />
                  <stop offset="1" stop-color="#FF8A00" />
                </linearGradient>
              </defs>
            </svg>
          </b-button>
          <b-button class="hero-slider-arrow" ref="nextslide" @click="next">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.1665 0.633499L0.499837 6.00017L8.1665 11.3668V0.633499Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0.599504"
                  y1="0.893071"
                  x2="9.55748"
                  y2="2.77899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC000" />
                  <stop offset="1" stop-color="#FF8A00" />
                </linearGradient>
              </defs>
            </svg>
          </b-button>
        </div>
      </div>
      <div class="slider-icon">
        <b-img :src="sliderIcon"></b-img>
      </div>
      <div class="slider-landing-man-image">
        <b-img :src="manImage"></b-img>
      </div>
    </div>
  </b-container>
</template>

<script>
import Slick from "vue-slick";
import sliderIcon from "../../assets/img/sliderIcon.png";
import manImage from "../../assets/img/morgan.png";
export default {
  name: "HeroLanding",
  components: {
    Slick
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000
    },
    sliderIcon,
    manImage
  }),
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    }
    // reInit() { // AWAIT FOR API
    //
    //     this.$nextTick(() => {
    //         this.$refs.slick.reSlick();
    //     });
    // },
  }
};
</script>
