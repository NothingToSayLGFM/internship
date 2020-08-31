<template>
  <b-container class="hero__hero-course--wrapper">
    <div class="hero__hero-course">
      <h1
        class="hero__hero-course--title"
      >Browse Thousands of Our Video Tutorials Curated Only for you.</h1>
      <p class="hero__hero-course--subtitle">
        Access all tutorials and resources when you become a premium member of
        <span
          class="bold-hero"
        >Semaj Africa.</span>
      </p>
    </div>
    <div class="course-icon">
      <b-img :src="sliderIcon"></b-img>
    </div>
    <div class="course-girl-image">
      <b-img :src="girlImage"></b-img>
    </div>
  </b-container>
</template>

<script>
import sliderIcon from "../../assets/img/course-icon.png";
import girlImage from "../../assets/img/girl.png";
export default {
  name: "HeroCourse",
  data: () => ({
    sliderIcon,
    girlImage
  })
};
</script>
