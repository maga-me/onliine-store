<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <router-link to="/" class="nav__logo">
          <img src="@/assets/images/logo.png" alt="" class="nav__logo-img" />
        </router-link>

        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/new" class="nav__link">New</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/category" class="nav__link">Category</router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="/sales" class="nav__link">Sale</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/contact" class="nav__link">Contacts</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/about" class="nav__link">About</router-link>
          </li>
        </ul>

        <router-link to="/cart" class="nav__shop">
          <img src="@/assets/images/shop.svg" alt="" class="nav__shop-img" />
          <span>{{ cart.length == 0 ? '' : cart.length }}</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["cart"]),
  },
};
</script>
