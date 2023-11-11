import { createStore } from 'vuex';
import createPersistedState from "vuex-plugin-persistedstate";
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    cart: [],
    category: [],
    categories: null,
    socials: {
      telegram: {
        name: "Telegram",
        link: "https://telegram.me/maga_me",
        icon: require("@/assets/images/icons/telegram.svg")
      },
      tiktok: {
        name: "TikTok",
        src: "https://www.tiktok.com/",
        icon: require("@/assets/images/icons/tiktok.svg")
      },
      youtube: {
        name: "YouTube",
        src: "https://www.youtube.com/watch?v=_1YwHbjELJI",
        icon: require("@/assets/images/icons/youtube.svg")
      },
      instagram: {
        name: "Instagram",
        src: "https://www.instagram.com/",
        icon: require("@/assets/images/icons/instagram.svg")
      },
      
    },
  },
  mutations: {
    setProducts(state, product) {
      state.products = product;
    },
    setShoppingCart(state, cart) {
      state.cart.push(cart)
    },
    setCartAdd(state, item) {
      state.cart.push(item)
    },
    setCartDel(state, id) {
      let idx = state.cart.findIndex(item => item.id == id)
      state.cart.splice(idx, 1)
    },
    setCategory(state, name) {
      state.category = state.products?.filter(product => product.category == name);
    },
    setCategories(state, category) {
      state.categories = category;
    },
    sortAscending(state) {
      state.products.sort((a, b) => a.price - b.price);
    },
    sortDescending(state) {
      state.products.sort((a, b) => b.price - a.price);
    },
    sortAscendingRating(state) {
      state.products.sort((a, b) => a.rating - b.rating);
    },
    sortDescendingRating(state) {
      state.products.sort((a, b) => b.rating - a.rating);
    },
    
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let productList = await axios.get('https://dummyjson.com/products?&limit=100');
        let products = productList?.data?.products;
        commit("setProducts", products);
      } catch (error) {
        console.error(error);
      } 
    },
    async getCategories({ commit }) {
      try {
        let categoryList = await axios.get('https://dummyjson.com/products/categories');
        let categories = categoryList?.data;
        commit("setCategories", categories);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});