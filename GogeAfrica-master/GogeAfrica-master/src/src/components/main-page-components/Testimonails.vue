<template>
  <section class="testimonials">
    <b-container class="testimonials-container">
      <div class="testimonials__text">
        <h2 class="testimonials__text--title">What Students Say</h2>
        <p class="testimonials__text--subtitle">
          Semaj Africa is an online education platform that delivers video
          courses, programs and resources for Individual, Advertising & Media
          Specialist,.
        </p>
      </div>
    </b-container>
    <div class="slider-wrap">
      <slick
        ref="testimonialsSlider"
        :options="slickOptions"
        @handleBeforeChange="handleBeforeChange"
      >
        <div class="slide">
          <div class="slide-overlay"></div>
          <div class="slide--quotes">
            <b-img :src="quotes" alt="slider-quotes"></b-img>
          </div>
          <p class="slide--text">
            Semaj Africa is an online education platform that delivers video courses,
            programs and resources for Individual, Advertising & Media Specialist,
            Online Marketing Professionals, Freelancers and anyone.
          </p>
          <div class="slide--author">
            <div class="author-image">
              <b-img src="https://picsum.photos/600/300/?image=25" alt="author"></b-img>
            </div>
            <div class="author-bio">
              <p class="author-name">Arthur Broklyn</p>
              <p class="author-category">Categories: 3d Modelling</p>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="slide-overlay"></div>
          <div class="slide--quotes">
            <b-img :src="quotes" alt="slider-quotes"></b-img>
          </div>
          <p class="slide--text">
            Semaj Africa is an online education platform that delivers video courses,
            programs and resources for Individual, Advertising & Media Specialist,
            Online Marketing Professionals, Freelancers and anyone.
          </p>
          <div class="slide--author">
            <div class="author-image">
              <b-img src="https://picsum.photos/600/300/?image=25" alt="author"></b-img>
            </div>
            <div class="author-bio">
              <p class="author-name">Arthur Broklyn</p>
              <p class="author-category">Categories: 3d Modelling</p>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="slide-overlay"></div>
          <div class="slide--quotes">
            <b-img :src="quotes" alt="slider-quotes"></b-img>
          </div>
          <p class="slide--text">
            Semaj Africa is an online education platform that delivers video courses,
            programs and resources for Individual, Advertising & Media Specialist,
            Online Marketing Professionals, Freelancers and anyone.
          </p>
          <div class="slide--author">
            <div class="author-image">
              <b-img src="https://picsum.photos/600/300/?image=25" alt="author"></b-img>
            </div>
            <div class="author-bio">
              <p class="author-name">Arthur Broklyn</p>
              <p class="author-category">Categories: 3d Modelling</p>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="slide-overlay"></div>
          <div class="slide--quotes">
            <b-img :src="quotes" alt="slider-quotes"></b-img>
          </div>
          <p class="slide--text">
            Semaj Africa is an online education platform that delivers video courses,
            programs and resources for Individual, Advertising & Media Specialist,
            Online Marketing Professionals, Freelancers and anyone.
          </p>
          <div class="slide--author">
            <div class="author-image">
              <b-img src="https://picsum.photos/600/300/?image=25" alt="author"></b-img>
            </div>
            <div class="author-bio">
              <p class="author-name">Arthur Broklyn</p>
              <p class="author-category">Categories: 3d Modelling</p>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="slide-overlay"></div>
          <div class="slide--quotes">
            <b-img :src="quotes" alt="slider-quotes"></b-img>
          </div>
          <p class="slide--text">
            Semaj Africa is an online education platform that delivers video courses,
            programs and resources for Individual, Advertising & Media Specialist,
            Online Marketing Professionals, Freelancers and anyone.
          </p>
          <div class="slide--author">
            <div class="author-image">
              <b-img src="https://picsum.photos/600/300/?image=25" alt="author"></b-img>
            </div>
            <div class="author-bio">
              <p class="author-name">Arthur Broklyn</p>
              <p class="author-category">Categories: 3d Modelling</p>
            </div>
          </div>
        </div>
      </slick>
    </div>
    <div class="testimonials__slider--arrows">
      <b-button @click="next" class="slider-arrow testi-rigth"></b-button>
      <b-button @click="prev" class="slider-arrow testi-left"></b-button>
    </div>
  </section>
</template>

<script>
import quotes from "../../assets/img/dots.png";

import Slick from "vue-slick";
export default {
  name: "Testimonails",
  components: {
    Slick
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 4,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    },
    quotes
  }),
  methods: {
    next() {
      this.$refs.testimonialsSlider.next();
    },
    prev() {
      this.$refs.testimonialsSlider.prev();
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    }
    // reInit() { // AWAIT FOR API
    //
    //     this.$nextTick(() => {
    //         this.$refs.slick.reSlick();
    //     });
    // },
    // currentSlider() {
    //     let currentSlide = document.
    // }
  }
};
</script>
