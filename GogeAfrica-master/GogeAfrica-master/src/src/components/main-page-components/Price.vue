<template>
  <section class="price">
    <b-container>
      <b-row>
        <b-col lg="5" class="price-wrap">
          <div class="price__text">
            <h2 class="price--title">
              Our
              <br />Pricing Plans
            </h2>
            <p
              class="price--subtitle"
            >Semaj Africa is an online education platform that delivers video courses, programs and resources for</p>
            <b-button class="orange-gradient-button price--button">Start Free Trial</b-button>
          </div>
        </b-col>
        <b-col lg="7" class="price__list">
          <b-row>
            <b-col lg="6" class="price__list--item">
              <h3 class="item-title">Premium</h3>
              <div class="item-price">
                <span class="item-valute">$</span>
                <p class="item-price-value">
                  <span class="value">15</span>
                  <span class="mounth">/Monthly</span>
                </p>
              </div>
              <p
                class="item-text"
              >Semaj Africa is an online education platform that delivers video courses, programs and resources for</p>
              <ul class="check-list">
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Unlimited Download</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Offline Accessibility</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>24/7 Supports</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Jobs Opportunity</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>2.0% Transaction Fee</p>
                </li>
              </ul>
              <div class="bottom-image">
                <b-img :src="bottomThing"></b-img>
              </div>
            </b-col>
            <b-col lg="6" class="price__list--item">
              <h3 class="item-title">Premium</h3>
              <div class="item-price">
                <span class="item-valute">$</span>
                <p class="item-price-value">
                  <span class="value">120</span>
                  <span class="mounth">/Annualy</span>
                </p>
              </div>
              <p
                class="item-text"
              >Semaj Africa is an online education platform that delivers video courses, programs and resources for</p>
              <ul class="check-list">
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Unlimited Download</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Offline Accessibility</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>24/7 Supports</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>Jobs Opportunity</p>
                </li>
                <li>
                  <b-img :src="check" alt="check"></b-img>
                  <p>2.0% Transaction Fee</p>
                </li>
              </ul>
              <div class="bottom-image">
                <b-img :src="bottomThing"></b-img>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div class="left-thing">
      <b-img :src="leftThing" alt="thing"></b-img>
    </div>
  </section>
</template>

<script>
import leftThing from "../../assets/img/left-sheet.png";
import check from "../../assets/img/check.png";
import bottomThing from "../../assets/img/bottom-thing.png";

export default {
  name: "Price",
  data: () => ({
    leftThing,
    check,
    bottomThing
  })
};
</script>