<template>
  <section class="product">
    <div class="container">
      <div class="product__card" v-for="(item, index) in product" :key="index">
        <p class="product__card-rating">{{ item?.rating }}</p>
        <div class="product__intro">
          <img :src="item?.thumbnail" alt="" class="product__img" />
        </div>
        <div class="product__desc">
          <div class="product__desc-about">
            <p class="product__desc-category">{{ item?.category }}</p>
            <h1 class="product__desc-title">{{ item?.title }}</h1>
            <p class="product__desc-price">${{ item.price * inputValue }}</p>
            <p class="product__desc-txt">{{ item?.description }}</p>
          </div>

          <div class="product__cart">
            <span>В наличии: {{ item?.stock }}</span>

            <button
              class="product__cart-add"
              @click="$store.commit('setShoppingCart', item)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="similar">
    <div class="container">
      <h2 class="similar__title">Similar Products {{ $route?.params?.id }}</h2>
      <div class="similar__products" :class="{ active: openAndClose }">
        <div
          class="products__card"
          v-for="(product, idx) in category"
          :key="idx"
        >
          <router-link
            :to="{
              name: 'ProductPage',
              params: { id: product?.id },
            }"
            class="products__rout"
          >
            <img :src="product?.thumbnail" alt="" class="products__img" />
          </router-link>
          <h3 class="products__name">{{ product?.title }}</h3>
          <router-link
            :to="{
              path: `/category/${product?.category}`,
            }"
            class="products__category"
            @click="$store.commit('setCategory', category[idx].category)"
            >#{{ product.category }}
          </router-link>
          <div class="products__inf">
            <div class="products__price">{{ product.price }}$</div>
            <router-link
              :to="{
                name: 'ProductPage',
                params: { id: product?.id },
              }"
              class="products__btn"
            >
              Add to cart
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/UI/Card/Card.vue";

export default {
  name: "ProductPage",
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      product: null,
      category: null,
      inputValue: 1,
      openAndClose: false,
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapState(["products"]),
    // setCategoryy() {
    //   this.product?.forEach((item) => {
    //     let categoryList = this.products?.filter(
    //       (product) => product?.category == item?.category
    //     );

    //     let del = categoryList?.filter((www) =>
    //       www.id === item.id ? false : true
    //     );

    //     this.category = del;
    //   });
    // },
  },
  created() {
    const product = this.products?.filter(
      (item) => item?.id == this.$route?.params?.id
    );
    if (product) {
      this.product = product;
    }
    this.product.forEach((el) => {
      let categoryList = this.products.filter(
        (item) => item?.category == el?.category
      );
      
      // console.log(categoryList);

      let delSame = categoryList.filter((category) =>
        category.id == el.id ? false : true
      );

      this.category = delSame;
    });
    if (this.products.length < +this.$route?.params?.id || isNaN(+this.$route?.params?.id)) {
      this.$router.push('/error')
    }
  },
};
</script>
