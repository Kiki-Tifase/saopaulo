<script setup></script>

<template>
  <div class="saopaulo">
    <div class="descportion">
      <h2 class="location">Sao Paulo, Brazil</h2>
      <p class="desc">
        One of the world's most captivating places, Brazil is a country of powdery white-sand
        beaches, verdant rainforests and wild, rhythm-filled metropolises.
      </p>
    </div>
    <div class="descportion2">
      <h2 class="location">Our Expertise</h2>
      <p class="desc">
        Welcome to Brazil Exclusive Travels – the premier luxury travel agency and concierge service
        in Rio de Janeiro. With over 7 years of experience, our international team of experts
        provides unparalleled expertise in planning and executing exclusive trips to Brazil. As the
        market leader in luxury concierge services, we pride ourselves on delivering bespoke
        experiences tailored to your unique preferences.
      </p>
      <div class="stats">
        <p>7+ years of experience</p>
        <p>6,867 project completed</p>
        <p>20 registered attractions</p>
        <p>30 partners</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  border: 1px red;
}

.location {
  color: #23395b;
  font-weight: bolder;
  font-size: 60px;
}

.desc {
  font-size: 20px;
}

.descportion {
  width: 400px;
  margin: 45px 100px 0px 700px;
}
.descportion2 {
  width: 1000px;
  margin: 45px 300px 0px 100px;
}

.saopaulo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  display: flex;
  justify-content: center;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 30px;
  font-weight: bolder;
  margin: auto;
}
</style>
