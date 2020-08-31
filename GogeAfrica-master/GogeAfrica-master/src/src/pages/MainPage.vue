<template>
  <main>
    <HeroSection>
      <HeroLanding />
    </HeroSection>
    <Portfolio />
    <Cocktails />
    <Count />
    <Testimonails />
    <Price />
    <Talk />
  </main>
</template>

<script>
import HeroSection from "../components/hero-section/HeroSection";
import HeroLanding from "../components/hero-section/HeroLanding";
import Portfolio from "../components/main-page-components/Portfolio";
import Cocktails from "../components/main-page-components/Cocktails";
import Count from "../components/main-page-components/Count";
import Testimonails from "../components/main-page-components/Testimonails";
import Price from "../components/main-page-components/Price";
import Talk from "../components/main-page-components/Talk";

export default {
  name: "MainPage",
  components: {
    HeroSection,
    HeroLanding,
    Portfolio,
    Cocktails,
    Count,
    Testimonails,
    Price,
    Talk,
  },
};
</script>
