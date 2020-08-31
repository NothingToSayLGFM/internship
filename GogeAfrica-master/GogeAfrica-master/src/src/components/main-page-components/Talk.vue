<template>
  <section class="talk">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="talk__text">
            <div>
              <h2>Let’s Build Something Great Together</h2>
              <p>
                Semaj Africa is an online education platform that delivers video courses, programs and resources for
                Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone
                looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia
                and CAD design.
              </p>
              <b-button class="orange-gradient-button talk__text--button">Let’s Talk!</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="left-image">
      <b-img :src="leftImage" alt="left-image"></b-img>
    </div>
    <div class="left-image left-image-real">
      <b-img :src="leftRealImage" alt="left-image"></b-img>
    </div>
  </section>
</template>

<script>
import leftImage from "../../assets/img/hero-fot.png";
import leftRealImage from "../../assets/img/girl1.png";

export default {
  name: "Talk",
  data: () => ({
    leftImage,
    leftRealImage
  })
};
</script>


