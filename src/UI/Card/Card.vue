<template>
  
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Card",
  data() {
    return {
      product: null,
      category: null,
    };
  },
  computed: {
    ...mapState(["products"]),
    setCategoryy() {
      this.product?.forEach((item) => {
        let categoryList = this.products?.filter(
          (product) => product.category == item.category
        );

        let del = categoryList?.filter((www) =>
          www.id === item.id ? false : true
        );

        this.category = del;
      });
    },
  },
  created() {
    const product = this.products?.filter(
      (item) => item?.id == this.$route?.params?.id
    );
    if (product) {
      this.product = product;
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
  },
};
</script>
