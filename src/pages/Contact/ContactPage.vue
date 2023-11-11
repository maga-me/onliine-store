<template>
  <section class="contact">
    <div class="container">
      <div class="contact__message">
        <h2 class="contact__title">Contact Us</h2>
        <p class="contact__subtitle">
          feel free to contact us and we will get back to you soon as we can.
          <br>
          our call center works <span>24/7</span> and you can call us during this time
        </p>

        <form action="" class="contact__form">
          <input
            type="text"
            name=""
            id=""
            class="contact__inp-name contact__inp"
            placeholder="Name..."
            required
          />
          <input
            type="email"
            class="contact__inp-email contact__inp"
            placeholder="Email..."
            required
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message..." class="contact__text-area"></textarea>

          <button class="contact__btn">Send</button>
        </form>
      </div>
      <div class="contact__socials">
        <h2 class="contact__socials-title">You can find us on...</h2>

        <ul class="contact__socials-list">
          <li
            class="contact__socials-item"
            v-for="(social, index) in socials"
            :key="index"
          >
            <a :href="social?.link" class="contact__socials-link">
              <img :src="social?.icon" :alt="social?.name" />
              {{ social?.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapState(["socials"]),
  },
};
</script>
