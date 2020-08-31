<template>
  <section class="count">
    <b-container>
      <b-row>
        <b-col lg="3" class="count__counter">
          <div class="count__icon">
            <b-img :src="count1" class="count__icon--img" alt="count"></b-img>
          </div>
          <p class="count__number">5,679</p>
          <p class="count__text">Registered Students</p>
        </b-col>
        <b-col lg="3" class="count__counter">
          <div class="count__icon">
            <b-img :src="count2" class="count__icon--img" alt="count"></b-img>
          </div>
          <p class="count__number">2,679</p>
          <p class="count__text">Student has been helped to achieve their dreams</p>
        </b-col>
        <b-col lg="3" class="count__counter">
          <div class="count__icon">
            <b-img :src="count3" class="count__icon--img" alt="count"></b-img>
          </div>
          <p class="count__number">10,000</p>
          <p class="count__text">More than 10,000 people visits our site monthly</p>
        </b-col>
        <b-col lg="3" class="count__counter">
          <div class="count__icon">
            <b-img :src="count4" class="count__icon--img" alt="count"></b-img>
          </div>
          <p class="count__number">#10</p>
          <p
            class="count__text"
          >Ranked among the top 10 growing online learning startups in West Africa</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>


<script>
import count1 from "../../assets/img/count1.png";
import count2 from "../../assets/img/count2.png";
import count3 from "../../assets/img/count3.png";
import count4 from "../../assets/img/count4.png";

export default {
  name: "Count",
  data: () => ({
    count1,
    count2,
    count3,
    count4
  })
};
</script>