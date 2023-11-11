<template>
  <div class="category">
    <div class="container">
      <h2 class="category__title">{{ title }}</h2>

      <div class="category__cards">
        <div
          class="category__card"
          v-for="(product, idx) in category"
          :key="idx"
        >
          <router-link
            :to="{
              name: 'ProductPage',
              params: { id: product?.id },
            }"
            @click="$store.commit('setCategory', product?.category)"
            class="products__rout"
          >
            <img :src="product?.thumbnail" alt="" class="category__img" />
          </router-link>
          <h3 class="category__name">{{ product?.title }}</h3>

          <div class="category__inf">
            <div class="category__price">{{ product.price }}$</div>
            <router-link
              :to="{
                name: 'ProductPage',
                params: { id: product?.id },
              }"
              @click="$store.commit('setCategory', product?.category)"
              class="category__btn"
            >
              Add to cart
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Category",
  data() {
    return {
      category: null,
      title: this.$route?.params?.category,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    const category = this.products?.filter(
      (item) => item?.category == this.$route?.params?.category
    );
    if (category) {
      this.category = category;
    }
  },
};
</script>
