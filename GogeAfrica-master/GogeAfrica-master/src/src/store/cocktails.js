import СocktailsService from "../utils/cocktailsService";

const cocktails = {
  state: {
    mainPageCocktails: [],
    coursePageCocktails: [],
    currentCategory: "chose category",
    baseUrl: "https://www.thecocktaildb.com/api/json",
  },
  mutations: {
    setMainPageCocktails(state, data) {
      state.mainPageCocktails = [];
      setTimeout(() => {
        state.mainPageCocktails.push(...data);
      }, 1000);
    },
    setCourseCocktails(state, data) {
      state.coursePageCocktails = [];
      setTimeout(() => {
        if (data === null || data.drinks === null) {
          state.coursePageCocktails = null;
        } else {
          state.coursePageCocktails.push(...data);
        }
      }, 1000);
    },

    setCategory(state, data) {
      state.currentCategory = data;
    },
  },
  actions: {
    async fetchMainPageCocktails({ commit, state }) {
      let cocktails = await СocktailsService.get(
        `${state.baseUrl}/v2/${process.env.VUE_APP_API_KEY}/popular.php`
      );
      let newArr = cocktails.drinks.map((item) => {
        return {
          ...item,
          isInCart: false,
          count: 1,
          price: parseInt(item.idDrink),
        };
      });
      commit("setMainPageCocktails", newArr);
    },

    async fetchCoursePageCocktails({ commit, state }) {
      let cocktails = await СocktailsService.get(
        `${state.baseUrl}/v2/${process.env.VUE_APP_API_KEY}/randomselection.php`
      );
      let newArr = cocktails.drinks.map((item) => {
        return {
          ...item,
          isInCart: false,
          count: 1,
          price: parseInt(item.idDrink),
        };
      });
      commit("setCourseCocktails", newArr);
    },

    async fetchSearchCocktails({ commit, state }, data) {
      let cocktails = await СocktailsService.get(
        `${state.baseUrl}/v1/1/search.php?s=${data}`
      );
      if (cocktails.drinks) {
        let newArr = cocktails.drinks.map((item) => {
          return {
            ...item,
            isInCart: false,
            count: 1,
            price: parseInt(item.idDrink),
          };
        });
        commit("setCourseCocktails", newArr);
      } else {
        commit("setCourseCocktails", null);
      }
    },

    setCategory({ commit }, data) {
      data = data.toLowerCase();
      commit("setCategory", data);
    },
  },
  getters: {
    mainPageCocktails: (state) => state.mainPageCocktails,
    coursePageCocktails: (state) => state.coursePageCocktails,
    currentCategory: (state) => state.currentCategory,
  },
};

export default cocktails;
