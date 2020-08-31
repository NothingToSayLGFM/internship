const cart = {
  state: {
    cartCount: 0,
    cartItems: [],
    removedItem: null,
    totalPrice: null,
  },
  mutations: {
    setTotalPrice(state, data) {
      state.totalPrice = data;
    },

    plusCartCount(state) {
      state.cartCount++;
    },
    minusCartCount(state) {
      state.cartCount--;
    },

    minusContItemInCart(state, data) {
      let newArr = state.cartItems;
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].idDrink === data.idDrink) {
          if (newArr[i].count > 1) {
            newArr[i].count--;
            newArr[i].price -= parseInt(newArr[i].idDrink);
          }
        }
      }
      state.cartItems = [];
      state.cartItems = [...newArr];
    },
    plusContItemInCart(state, data) {
      let newArr = state.cartItems;
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].idDrink === data.idDrink) {
          newArr[i].count++;
          newArr[i].price += parseInt(newArr[i].idDrink);
        }
      }
      state.cartItems = [];
      state.cartItems = [...newArr];
    },

    addCartItem(state, data) {
      let newState = state.cartItems.findIndex((i) => {
        return i.idDrink === data.idDrink;
      });
      if (newState !== -1) {
        state.cartItems[newState].count++;
        state.cartItems[newState].price += parseInt(data.idDrink);
      } else {
        state.cartItems.push(data);
        state.cartCount++;
      }
    },

    removeCartItem(state, data) {
      state.removedItem = data;
    },
    confirmRemove(state) {
      let newState = state.cartItems;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].idDrink === state.removedItem.idDrink) {
          newState.splice(i, 1);
        }
      }
      state.cartItems = [];
      state.cartItems = [...newState];
    },

    clearCart(state) {
      state.cartItems = [];
      state.cartCount = 0;
    },
  },
  actions: {
    setTotalPrice({ commit }, data) {
      commit("setTotalPrice", data);
    },

    setCartItem({ commit }, data) {
      commit("addCartItem", data);
    },
    removeCartItem({ commit }, data) {
      commit("removeCartItem", data);
    },

    minusContItemInCart({ commit }, data) {
      commit("minusContItemInCart", data);
    },
    plusContItemInCart({ commit }, data) {
      commit("plusContItemInCart", data);
    },

    confirmRemoveItem({ commit }) {
      commit("confirmRemove");
      commit("minusCartCount");
    },

    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  getters: {
    cartCount: (state) => state.cartCount,
    cartItems: (state) => state.cartItems,
    removedItem: (state) => state.removedItem,
  },
};

export default cart;
