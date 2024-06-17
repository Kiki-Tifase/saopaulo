<template>
  <header>
    <h1 class="section-header-h1">Your Food</h1>
  </header>
  <h2 class="section-header-h2">Restaurant</h2>
  <article class="section-boxes-container">
    <section class="section-food-box">
      <h3 class="section-food-box-header">Starters</h3>
    </section>
    <section class="section-food-box">
      <h3 class="section-food-box-header">Main Course</h3>
    </section>
    <section class="section-food-box">
      <h3 class="section-food-box-header">Dessert</h3>
    </section>
  </article>
  <article class="section-boxes-container">
    <section class="section-food-box">
      <h3 class="section-food-box-header">Starters</h3>
    </section>
    <section class="section-food-box">
      <h3 class="section-food-box-header">Main Course</h3>
    </section>
    <section class="section-food-box">
      <h3 class="section-food-box-header">Dessert</h3>
    </section>
  </article>
</template>

<style>
.section-header-h2 {
  align-items: center;
  background-color: beige;
  color: #606c38;
  display: flex;
  font-size: 30px;
  height: 100px;
  justify-content: center;
  padding: 5px 15px;
  text-align: center;
  width: fit-content;
  margin: auto;
}

.section-boxes-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 20px 300px;
  justify-items: center;
}

.section-food-box {
  width: 500px;
  height: 500px;
  background-image: url('@/assets/images/victoria-shes-UC0HZdUitWY-unsplash.jpg');
  padding: 0;
}

.section-food-box-header {
  color: #283618;
  background-color: #ecf39e;
  height: 10%;
  margin: 0;
  padding: 15px 25px;
  font-size: 30px;
}
</style>
