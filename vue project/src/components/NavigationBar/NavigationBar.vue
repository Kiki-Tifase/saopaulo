<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-navigation">
      <li>
        <button class="nav-square-left nav-text-menu"><h2>Menu</h2></button>
      </li>
      <li class="nav-square-left">
        <figure>
          <img src="../../assets/images/Untitled_design-2-removebg-preview.png" alt="logo" />
        </figure>
      </li>
      <li class="nav-square-left">
        <h2 class="nav-text-contact">Contact</h2>
        <img class="nav-divider icon" src="../../assets/images/mail-512.png" alt="mail" />
        <img class="icon" src="../../assets/images/phone-512.png" alt="phone" />
      </li>
    </ul>
  </nav>
  <div class="drop-down-rectangle">
    <h2 class="rectangle-links">Our Art</h2>
    <h2 class="rectangle-links">Our Art</h2>
    <h2 class="rectangle-links">Our Art</h2>
    <h2 class="rectangle-links">Our Art</h2>
  </div>
</template>

<style>
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

.drop-down-rectangle {
  height: 600px;
  background-color: beige;
  width: 300px;
  justify-content: center;
  align-items: center;
  padding: 200px 100px;
}

.nav-text-menu {
  background-color: #283618;
  width: 300px;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
}

.nav-navigation {
  background-color: beige;
  display: flex;
  height: 100px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
}

.nav-text-contact {
  color: #283618;
  font-family: 'Times New Roman', Times, serif;
  font-size: 5ch;
}

.icon {
  height: 70%;
  padding: 15px;
}

.nav-divider {
  border-left: 3px solid black;
  margin-left: 20px;
}
</style>
