<script setup>
import { RouterLink } from 'vue-router'
import NavigationBarMenu from '@/components/NavigationBarMenu/NavigationBarMenu.vue'
import { ref } from 'vue'
import WeatherContainer from '@/components/WeatherContainer/WeatherContainer.vue'
const homeUrl = '/home'

const isMenuOpen = ref(false)

const toggleMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-navigation">
      <li>
        <button class="nav-square-left nav-text-menu" @click="toggleMenuOpen"><h2>Menu</h2></button>
      </li>
      <li class="nav-square-left">
        <a :href="homeUrl">
          <img class="logo" src="../../assets/images/logo.png" alt="logo" />
        </a>
        <WeatherContainer />
      </li>
      <li class="nav-square-left">
        <a href="/contact">
          <h2 class="nav-text-contact">Contact</h2>
        </a>
        <button class="button" popovertarget="my-popover-mail"></button>

        <div popover id="my-popover-mail">saopaulo@gmail.com</div>

        <button class="button2" popovertarget="my-popover-phone"></button>

        <div popover id="my-popover-phone">+2345678236</div>
      </li>
    </ul>
  </nav>
  <NavigationBarMenu v-if="isMenuOpen" />
</template>

<style scoped>
#my-popover-mail {
  position: absolute;
  left: 90%;
  top: 7%;
}
#my-popover-phone {
  position: absolute;
  left: 96%;
  top: 7%;
}
.nav-bar ol {
  list-style-type: none;
}

.nav-square-left {
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.location1 {
  top: 51%;
  right: 55%;
  position: absolute;
}

.nav-text-menu {
  text-decoration: none;
  background-color: #23395b;
  width: 300px;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
}

.nav-navigation {
  background-color: #dde8f4;
  display: flex;
  height: 100px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
}

.button {
  width: 55px;
  height: 60px;
  margin: 10px;
  background-color: rgb(243, 243, 244, 0);
  border-color: rgb(243, 243, 244, 0);
  background-image: url('../../assets/images/phone-512.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.button2 {
  width: 70px;
  height: 70px;
  margin: 10px;
  position: relative;

  background-color: rgb(243, 243, 244, 0);
  border-color: rgb(243, 243, 244, 0);
  background-image: url('../../assets/images/mail-512.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.logo {
  height: 275px;
  margin-top: 40px;
}

.nav-text-contact {
  color: #23395b;
  font-family: 'Times New Roman', Times, serif;
  font-size: 5ch;
}

.icon {
  height: 70%;
  padding: 15px;
}
</style>
