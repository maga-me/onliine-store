<template>
  <div class="categories">
    <div class="container">
      <h2 class="categories__title">Categories</h2>
      <ul class="categories__list">
        <li
          class="categories__item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <router-link :to="`/category/${category}`" class="categories__link">
            {{ category }}
          </router-link>
        </li>
      </ul>

      <ul class="categoryBlock__list" v-for="(category, index) in categoryBlocks" :key="index">
        <li class="categoryBlock__item" v-for="(item, index) in category" :key="index">
          <p class="">{{item}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Category",
  data() {
    return {
      categoryBlocks: null
    }
  },
  computed: {
    ...mapState(["products", "categories"]),
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>
