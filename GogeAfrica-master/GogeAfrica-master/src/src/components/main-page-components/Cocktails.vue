<template>
  <section class="cocktails">
    <b-container class="cocktails__container">
      <h2 class="cocktails--title">Cocktails</h2>
      <b-row v-if="mainPageCocktails && mainPageCocktails.length > 0">
        <CardLanding
          v-for="cocktail in mainPageCocktails"
          :key="cocktail.id"
          :cocktail="cocktail"
        />
      </b-row>
      <b-row v-else-if="mainPageCocktails && mainPageCocktails.length === 0">
        <CardLanding v-for="n in 12" :key="n" />
      </b-row>
      <b-row v-else>
        <h2 class="nothing-found text-center">Cocktail not found</h2>
      </b-row>
      <b-button
        class="orange-gradient-button cocktails--button"
        :to="{ name: 'CoursePage' }"
        >All Beers</b-button
      >
    </b-container>
  </section>
</template>

<script>
import CardLanding from "../cards/CardLanding";
import { mapGetters } from "vuex";

export default {
  name: "Cocktails",
  components: { CardLanding },
  computed: mapGetters(["mainPageCocktails"]),
  async mounted() {
    await this.$store.dispatch("fetchMainPageCocktails");
  },
};
</script>
