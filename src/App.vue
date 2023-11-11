<template>
  <div class="wrapper">
    <HeaderVue />
    <main>
      <router-view v-slot="{Component}">
        <component :is="Component" :key="$route.fullPath"></component>
      </router-view>
    </main>
  </div>
</template>

<script>
import HeaderVue from "@/components/Header/Header.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderVue,
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
