<template>
  <section class="cart">
    <div class="container">
      <p class="cart__yesOrNo" v-show="cart.length ? false : true">
        Your cart is currently no products
      </p>
      <ul class="cart__list">
        <li class="cart__product" v-for="(product, index) in cart" :key="index">
          <router-link
            :to="{
              name: 'ProductPage',
              params: { id: product?.id },
            }"
            @click="$store.commit('setCategory', product?.category)"
            class="cart__rout"
          >
            <img
              :src="product?.thumbnail"
              alt="product-img"
              class="cart__product-img"
            />
          </router-link>
          <div class="cart__product-about">
            <h3 class="cart__product-title">{{ product?.title }}</h3>
            <p class="cart__product-brand">
              <b>Brand:</b> {{ product?.brand }}
            </p>
            <p class="cart__product-desc">{{ product?.description }}</p>
            <p class="cart__product-price">{{ product?.price }}$</p>
          </div>

          <div class="cart__product-control">
            <button
              class="cart__product-add"
              @click="$store.commit('setCartAdd', cart[index])"
            >
              1+
            </button>
            <button
              class="cart__product-delete"
              @click="$store.commit('setCartDel', cart[index].id)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
      <div class="cart__total">
        
        <p class="cart__total-txt">
          Total: <span>{{ totalPrice }}$</span>
        </p>
        <button class="cart__total-buy">Buy</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapState(["products", "cart"]),
    totalPrice() {
      return this.cart.reduce(
        (acc, val) => acc + val.price,
        0
      );
    },
  },
};
</script>
