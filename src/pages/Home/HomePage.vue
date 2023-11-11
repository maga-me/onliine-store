<template>
  <section class="opt">
    <div class="container">
      <div class="opt__desc">
        <ul class="sort__list">
          <li class="sort__item" @click="listFunc = !listFunc">
            Opt
            <img
              src="@/assets/images/bottom.svg"
              alt=""
              class="sort__img"
              v-show="listFunc"
            />
            <img
              src="@/assets/images/top.svg"
              alt=""
              class="sort__img"
              v-show="!listFunc"
            />
          </li>
          <ul class="sort__menu" :class="{ active: listFunc }">
            <li class="sort__item" @click="sortAscending">Sort by prices 1-10</li>
            <li class="sort__item" @click="sortDescending">Sort by prices 10-1</li>
            <li class="sort__item" @click="sortAscendingRating">Sort ratings ascending</li>
            <li class="sort__item" @click="sortDescendingRating">Sort ratings in descending</li>
          </ul>
        </ul>

        <p class="opt__num">
          Общее кол-во товаров - <span>{{ products.length }}</span>
        </p>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="products__cards">
        <div
          class="products__card"
          v-for="(product, idx) in paginatedUsers"
          :key="idx"
        >
          <p class="products__card-rating">★ {{ product?.rating }}</p>
          <router-link
            :to="{
              name: 'ProductPage',
              params: { id: product?.id },
            }"
            @click="$store.commit('setCategory', paginatedUsers[idx].category)"
            class="products__rout"
          >
            <img :src="product?.thumbnail" alt="" class="products__img" />
          </router-link>

          <h3 class="products__name">{{ product?.title }}</h3>
          <router-link
            :to="{
              name: 'CategoryName',
              params: { category: product?.category },
            }"
            class="products__category"
            @click="$store.commit('setCategory', paginatedUsers[idx].category)"
            >#{{ product.category }}
          </router-link>
          <div class="products__inf">
            <div class="products__price">{{ product.price }}$</div>
            <router-link
              :to="{
                name: 'ProductPage',
                params: { id: product?.id },
              }"
              @click="
                $store.commit('setCategory', paginatedUsers[idx].category)
              "
              class="products__btn"
            >
              Add to cart
            </router-link>
          </div>
        </div>
        <p v-show="paginatedUsers?.length ? false : true">No more products</p>
      </div>

      <div class="products__pagination">
        <button class="products__pagination-btn prev" @click="prev">
          Prev
        </button>
        <div
          class="products__pagination-page"
          v-for="(page, index) in pages"
          :key="index"
          @click="pageClick(page)"
          :class="{ selected: page == pageNumber }"
        >
          {{ page }}
        </div>
        <button class="products__pagination-btn next" @click="next">
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Intro",
  data() {
    return {
      usersPerPage: 16,
      pageNumber: 1,
      listFunc: false,
    };
  },
  computed: {
    ...mapState(["products", "numbers", "www", "cart"]),
    sortedNumbers() {
      return [...this.products];
    },
    pages() {
      return Math.ceil(this.products?.length / this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.products.slice(from, to);
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    ...mapMutations(["sortAscending", "sortDescending", "sortAscendingRating", "sortDescendingRating"]),
    pageClick(page) {
      this.pageNumber = page;
    },
    prev() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
    },
    next() {
      if (
        this.pageNumber < Math.ceil(this.products?.length / this.usersPerPage)
      ) {
        this.pageNumber++;
      }
    },
  },
};
</script>
