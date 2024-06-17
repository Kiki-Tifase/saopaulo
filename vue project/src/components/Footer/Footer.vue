<script setup>
import FooterLinks from '@/components/FooterLinks/FooterLinks.vue'
</script>

<template>
  <footer class="footer">
    <section>
      <FooterLinks name="About" link="/about"></FooterLinks>
      <FooterLinks name="Our Story" link=/our-story></FooterLinks>
      <FooterLinks name="Shop" link=/shop></FooterLinks>
      <FooterLinks name="FAQ" link=/faq></FooterLinks>
    </section>
    <figure>
      <img class="footer-links" src="@/assets/images/Untitled_design-2-removebg-preview.png" />
    </figure>
  </footer>
</template>

<style>
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

.footer-links {
  color: #003566;
  display: flex;
  text-align: center;
  font-size: 60px;
  font-style: oblique;
  text-shadow: rgb(18, 3, 218) 1px 0 5px;
}

.footer-links:hover {
  color: red;
  text-shadow: rgb(84, 16, 16) 1px 0 10px;
}
</style>
