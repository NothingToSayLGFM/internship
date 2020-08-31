<template>
  <section class="course-card">
    <b-container class="course-card--container">
      <b-row>
        <b-col lg="9">
          <div class="grid-filter">
            <b-button ref="row" class="grid-item" @click="rowGrid">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.21875 3.24158H21.921"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9.21875 11.4607H21.921"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9.21875 19.6797H21.921"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="1"
                  y="1.00021"
                  width="4.48315"
                  height="4.48315"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="1"
                  y="9.21909"
                  width="4.48315"
                  height="4.48315"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="1"
                  y="17.4382"
                  width="4.48315"
                  height="4.48315"
                  stroke="#D4D4D4"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </b-button>
            <b-button ref="column" class="grid-item active" @click="columnGrid">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.86523"
                  y="1.00021"
                  width="8.2191"
                  height="8.2191"
                  stroke="#5C5C5C"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="14.5674"
                  y="1"
                  width="8.2191"
                  height="8.2191"
                  stroke="#5C5C5C"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="1.86523"
                  y="13.7022"
                  width="8.2191"
                  height="8.2191"
                  stroke="#5C5C5C"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <rect
                  x="14.5674"
                  y="13.7022"
                  width="8.2191"
                  height="8.2191"
                  stroke="#5C5C5C"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </b-button>
          </div>
          <b-row
            class="course-card__offer-list"
            v-if="
              coursePageCocktails &&
                coursePageCocktails.length > 0 &&
                cards &&
                cards.length > 0
            "
          >
            <CardCourse
              v-for="cocktail in cards"
              :key="cocktail.id"
              :cocktail="cocktail"
            />
          </b-row>
          <b-row
            v-else-if="coursePageCocktails && coursePageCocktails.length == 0"
          >
            <CardCourse v-for="n in 10" :key="n" />
          </b-row>
          <b-row v-else>
            <h2 class="nothing-found text-center">Cocktail not found</h2>
          </b-row>
        </b-col>
        <b-col lg="3">
          <div class="course-card__category">
            <div class="category-active" @click="toggleList">
              <p>{{ currentCategory }}</p>
              <b-img :src="dropdown"></b-img>
            </div>
            <div class="categort-list active">
              <p @click="choseCategory">Glass</p>
              <p @click="choseCategory">Alcoholic</p>
              <p @click="choseCategory">Category</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import grid1 from "../../assets/img/filter1.png";
import grid2 from "../../assets/img/filter2.png";
import dropdown from "../../assets/img/dropdown.png";
import CardCourse from "../cards/CardCourse";

export default {
  name: "CourseCardSection",
  components: {
    CardCourse,
  },
  data: () => ({
    grid1,
    grid2,
    dropdown,
    cards: null,
  }),
  watch: {
    coursePageCocktails() {
      this.cards = this.coursePageCocktails;
    },
  },
  computed: {
    coursePageCocktails() {
      return this.$store.getters.coursePageCocktails;
    },
    currentCategory() {
      return this.$store.getters.currentCategory;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchCoursePageCocktails");
  },
  methods: {
    toggleList() {
      let list = document.querySelector(".categort-list");
      if (list.classList.contains("active")) {
        list.classList.remove("active");
      } else {
        list.classList.add("active");
      }
    },

    choseCategory({ target }) {
      this.$store.dispatch("setCategory", target.textContent);
      let list = document.querySelector(".categort-list");
      list.classList.remove("active");
      this.cards = this.coursePageCocktails;
      if (this.cards) {
        if (this.currentCategory === "glass") {
          let filtered = this.cards.filter(
            (item) =>
              item.strGlass.toLowerCase().indexOf(this.currentCategory) !== -1
          );
          this.cards = filtered;
        } else if (
          this.currentCategory === "alcoholic" &&
          this.currentCategory !== "non alcoholic"
        ) {
          let filtered = this.cards.filter(
            (item) =>
              item.strAlcoholic.toLowerCase().indexOf(this.currentCategory) !==
                -1 &&
              item.strAlcoholic
                .toLowerCase()
                .indexOf("non " + this.currentCategory)
          );
          this.cards = filtered;
        } else if (this.currentCategory === "category") {
          let filtered = this.cards.filter(
            (item) =>
              item.strCategory.toLowerCase().indexOf(this.currentCategory) !==
              -1
          );
          this.cards = filtered;
        }
      }
    },

    columnGrid() {
      let cards = document.querySelectorAll(".course-cocktails");
      cards.forEach((item) => {
        if (item.classList.contains("col-lg-12")) {
          item.classList.remove("row-column");
          item.classList.remove("col-lg-12");
          item.classList.add("col-lg-4");
          item.classList.add("col-md-6");
        }
      });
      if (this.$refs.row.classList.contains("active")) {
        this.$refs.row.classList.remove("active");
        this.$refs.column.classList.add("active");
      }
    },
    rowGrid() {
      let cards = document.querySelectorAll(".course-cocktails");
      cards.forEach((item) => {
        if (
          item.classList.contains("col-lg-4") &&
          item.classList.contains("col-md-6")
        ) {
          item.classList.remove("col-lg-4");
          item.classList.remove("col-md-6");
          item.classList.add("col-lg-12");
          item.classList.add("row-column");
        }
      });
      if (this.$refs.column.classList.contains("active")) {
        this.$refs.column.classList.remove("active");
        this.$refs.row.classList.add("active");
      }
    },
  },
};
</script>
