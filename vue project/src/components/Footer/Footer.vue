<script setup>
import FooterLinks from '@/components/FooterLinks/FooterLinks.vue'
</script>

<template>
  <footer class="footer">
    <section>
      <FooterLinks name="About" link="https://developer.mozilla.org/en-US/"></FooterLinks>
      <FooterLinks name="Our Story" link="https://developer.mozilla.org/en-US/"></FooterLinks>
      <FooterLinks name="Shop" link="https://developer.mozilla.org/en-US/"></FooterLinks>
      <FooterLinks name="FAQ" link="https://developer.mozilla.org/en-US/"></FooterLinks>
    </section>
    <figure>
      <img class="links" src="@/assets/images/Screenshot 2024-06-24 at 14.58.05.png" />
    </figure>
  </footer>
</template>

<style scoped>
.footer {
  background-image: url('@/assets/images/beach.gif');
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
  justify-content: space-around;
  display: flex;
  max-height: none;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  background-position-y: 50%;
}

.links {
  color: #723486;
  display: flex;
  text-align: center;
  font-size: 60px;
  font-style: oblique;
  text-shadow: #723486 1px 0 5px;
  width: 70%;
}

.links:hover {
  color: red;
  text-shadow: rgb(84, 16, 16) 1px 0 10px;
}
</style>
