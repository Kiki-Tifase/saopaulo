<script setup>
import CityPopover from '@/components/CityPopover/CityPopover.vue'
</script>

<template>
  <header>
    <h1 class="header">Your City | Downtown Augusta</h1>
  </header>
  <section class="map">
    <CityPopover
      class="location1"
      imgSrc="https://www.smarttravelers.de/wp-content/uploads/2019/03/Simplonpark1.jpg"
      position="bottom"
    >
      <template #caption>
        Parco Sempione is a picturesque urban park nestled in the heart of Sao Paulo, Brazil.
        Boasting lush greenery, tranquil lakes, and winding pathways, the park provides a peaceful
        escape from the bustling city. Visitors can admire the iconic Sforza Castle, which looms
        majestically over the park, or simply relax amidst the natural beauty. Parco Sempione is a
        beloved destination for locals and tourists seeking a serene retreat in the midst of Milan's
        vibrant energy.
      </template>
    </CityPopover>
    <CityPopover
      class="location2"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Palacio_de_los_deportes_de_Santiago_de_los_Caballeros.jpg/800px-Palacio_de_los_deportes_de_Santiago_de_los_Caballeros.jpg?20110809075409"
      position="top"
    >
      <template #caption>
        The Palacio de Deportes, located in the heart of Sao Paulo, is a state-of-the-art sports
        arena that has played host to numerous international sporting events, concerts, and other
        entertainment spectacles. With its modern architecture and versatile facilities, the Palacio
        de Deportes offers a dynamic space for athletes and performers alike to showcase their
        talents to audiences from around the world. Its central location and excellent amenities
        make it a premier destination for both sports enthusiasts and music fans.
      </template>
    </CityPopover>
    <CityPopover
      class="location3"
      imgSrc="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475684-Boston-City.jpg"
      position="top"
    >
      <template #caption>
        The Palacio de Deportes, located in the heart of Sao Paulo, is a state-of-the-art sports
        arena that has played host to numerous international sporting events, concerts, and other
        entertainment spectacles. With its modern architecture and versatile facilities, the Palacio
        de Deportes offers a dynamic space for athletes and performers alike to showcase their
        talents to audiences from around the world. Its central location and excellent amenities
        make it a premier destination for both sports enthusiasts and music fans.
      </template>
    </CityPopover>
    <CityPopover
      class="location4"
      imgSrc="https://www.enmilan.net/wp-content/uploads/2019/01/famedio-milan-cementerio.jpeg"
      position="bottom-right"
    >
      <template #caption>
        The Palacio de Deportes, located in the heart of Sao Paulo, is a state-of-the-art sports
        arena that has played host to numerous international sporting events, concerts, and other
        entertainment spectacles. With its modern architecture and versatile facilities, the Palacio
        de Deportes offers a dynamic space for athletes and performers alike to showcase their
        talents to audiences from around the world. Its central location and excellent amenities
        make it a premier destination for both sports enthusiasts and music fans.
      </template>
    </CityPopover>
  </section>
</template>

<style scoped>
* {
  border: 1px red;
}
.header {
  align-items: center;
  background-color: #dde8f4;
  color: #f46ac4;
  display: flex;
  font-size: 70px;
  height: 100px;
  justify-content: center;
  margin: 80px auto;
  padding: auto;
  text-align: center;
  width: 90%;
}
.map {
  height: 950px;
  background-image: url('@/assets/images/citymap.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px auto;
  display: flex;
  position: relative;
  width: 100%;
}

.location1 {
  top: 51%;
  right: 55%;
  position: absolute;
}
.location2 {
  top: 40%;
  right: 85%;
  position: absolute;
}
.location3 {
  top: 63%;
  right: 22%;
  position: absolute;
}
.location4 {
  top: 6%;
  right: 52%;
  position: absolute;
}

.image {
  height: 250px;
  margin: auto;
}

.caption {
  text-align: center;
  margin: auto;
}
</style>
