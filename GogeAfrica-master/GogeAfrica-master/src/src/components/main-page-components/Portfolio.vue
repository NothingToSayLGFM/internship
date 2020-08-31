<template>
  <section class="portfolio">
    <b-container>
      <b-row>
        <b-col lg="4">
          <div class="portfolio__icon">
            <b-img :src="firstIcon" class="portfolio__icon--img"></b-img>
            <h3 class="portfolio__icon--title">Unlimited Access</h3>
            <p class="portfolio__icon--text">One subscription unlimited access</p>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="portfolio__icon">
            <b-img :src="secondIcon" class="portfolio__icon--img"></b-img>
            <h3 class="portfolio__icon--title">Expert Teachers</h3>
            <p
              class="portfolio__icon--text"
            >Learn from industry experts who are passionate about teaching</p>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="portfolio__icon">
            <b-img :src="lasttIcon" class="portfolio__icon--img"></b-img>
            <h3 class="portfolio__icon--title">Learn Anywhere</h3>
            <p class="portfolio__icon--text">Switch between your computer, tablet, or mobile device.</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="wrap">
        <b-col lg="12">
          <div class="portfolio__text">
            <div>
              <h2 class="portfolio__text--title">
                Learn A Skill.
                <br />Build Your Portfolio.
                <br />
                <span class="title-bold">Get Hired!</span>
              </h2>
              <p class="portfolio__text--text">
                Semaj Africa is an online education platform that delivers
                video courses, programs and resources for Indiv
                idual, Advertising & Media Specialist, Online
                Marketing Professionals, Freelancers and anyone looking
                to pursue a career in digital marketing, Accounting, Web developme
                nt, Programming. Multimedia and CAD design.
              </p>
              <b-button class="portfolio__text--button orange-gradient-button">Discover</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="portfolio__image">
      <b-img :src="placeholder" class="portfolio__image--first-placeholder"></b-img>
    </div>
    <div class="portfolio__image portfolio-real-image">
      <b-img :src="leftRealImage" class="portfolio__image--first-placeholder"></b-img>
    </div>
  </section>
</template>

<script>
import firstIcon from "../../assets/img/portfolioicon1.png";
import secondIcon from "../../assets/img/portfolioicon2.png";
import lasttIcon from "../../assets/img/portfolioicon3.png";
import placeholder from "../../assets/img/placeholder.png";
import leftRealImage from "../../assets/img/girl2.png";

export default {
  name: "Portfolio",
  data: () => ({
    firstIcon,
    secondIcon,
    lasttIcon,
    placeholder,
    leftRealImage
  })
};
</script>