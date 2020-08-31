<template>
  <section class="search-pannel">
    <b-container class="search-pannel--container">
      <div class="search-pannel--wrapper">
        <b-form class="search-pannel--form" @submit.prevent="searchCocktails">
          <b-form-input id="input-1" type="text" v-model="cocktail" placeholder="Search"></b-form-input>
          <div class="search-icon">
            <b-img :src="loop" alt="loop"></b-img>
          </div>
          <small class="search-small" v-if="emptyInput">fiels must be not empty</small>
        </b-form>
      </div>
    </b-container>
  </section>
</template>

<script>
import loop from "../../assets/img/loop.png";

export default {
  name: "SearchPanel",
  data: () => ({
    loop,
    cocktail: "",
    emptyInput: false
  }),
  methods: {
    async searchCocktails() {
      if (this.cocktail === "") {
        this.emptyInput = true;
      } else {
        await this.$store.dispatch("fetchSearchCocktails", this.cocktail);
        this.emptyInput = false;
        this.cocktail = "";
      }
      this.$store.dispatch("setCategory", "chose category");
    }
  }
};
</script>