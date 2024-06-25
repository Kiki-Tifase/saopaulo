<script setup></script>

<template>
  <header>
    <h1 class="header">Your City | Downtown Augusta</h1>
  </header>
  <section class="map">
    <button class="dot1" popovertarget="my-popover1"></button>
    <div popover id="my-popover1">
      <img
        class="image"
        src="https://www.smarttravelers.de/wp-content/uploads/2019/03/Simplonpark1.jpg"
      />
      <p class="caption">
        Parco Sempione is a picturesque urban park nestled in the heart of Sao Paulo, Brazil.
        Boasting lush greenery, tranquil lakes, and winding pathways, the park provides a peaceful
        escape from the bustling city. Visitors can admire the iconic Sforza Castle, which looms
        majestically over the park, or simply relax amidst the natural beauty. Parco Sempione is a
        beloved destination for locals and tourists seeking a serene retreat in the midst of Milan's
        vibrant energy.
      </p>
    </div>
    <button class="dot2" popovertarget="my-popover2"></button>
    <div popover id="my-popover2">
      <img
        class="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Palacio_de_los_deportes_de_Santiago_de_los_Caballeros.jpg/800px-Palacio_de_los_deportes_de_Santiago_de_los_Caballeros.jpg?20110809075409"
      />
      <p class="caption">
        The Palacio de Deportes, located in the heart of Madrid, is a state-of-the-art sports arena
        that has played host to numerous international sporting events, concerts, and other
        entertainment spectacles. With its modern architecture and versatile facilities, the Palacio
        de Deportes offers a dynamic space for athletes and performers alike to showcase their
        talents to audiences from around the world. Its central location and excellent amenities
        make it a premier destination for both sports enthusiasts and music fans.
      </p>
    </div>
    <button class="dot3" popovertarget="my-popover3"></button>
    <div popover id="my-popover3">
      <img
        class="image"
        src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475684-Boston-City.jpg"
      />
      <p class="caption">
        The Jardin Público in Brazil is an enchanting public garden that offers a serene sanctuary
        amidst the lively urban landscape. With its vibrant array of flora, tranquil ponds, and
        meandering pathways, the garden provides a captivating escape for visitors to immerse
        themselves in nature's beauty. The Jardim Público is a cherished destination for locals and
        tourists alike, offering a peaceful respite and a picturesque backdrop for leisurely strolls
        and moments of quiet reflection.
      </p>
    </div>
    <button class="dot4" popovertarget="my-popover4"></button>
    <div popover id="my-popover4">
      <img
        class="image"
        src="https://www.enmilan.net/wp-content/uploads/2019/01/famedio-milan-cementerio.jpeg"
      />
      <p class="caption">
        The Cementerio Monumental in Brazil is a striking and historically significant cemetery that
        serves as a final resting place for many notable individuals. With its grand mausoleums,
        elegant sculptures, and meticulously landscaped grounds, the cemetery exudes a sense of
        solemn beauty and reverence. Visitors can explore the rich architectural and cultural
        heritage while paying homage to the influential figures laid to rest within its hallowed
        grounds. The Cementerio Monumental stands as a poignant testament to Brazil's past and the
        enduring legacies of those who have shaped its history.
      </p>
    </div>
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

.dot1,
.dot2,
.dot3,
.dot4 {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  background-color: #f46ac4;
  cursor: pointer;
  border-color: 2px #dde8f4;
}

.dot1,
.dot2,
.dot3,
.dot4 {
  &:hover {
    background-color: #dde8f4;
  }
}

.dot1 {
  top: 91%;
  right: 55%;
}
.dot2 {
  top: 40%;
  right: 85%;
}
.dot3 {
  top: 63%;
  right: 22%;
}
.dot4 {
  top: 6%;
  right: 52%;
}

#my-popover1 {
  position: absolute;
  top: 59%;
  left: 25%;
  width: 30%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
/* add pink border */

#my-popover2 {
  position: absolute;
  top: 44%;
  right: 58%;
  width: 30%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#my-popover3 {
  position: absolute;
  top: 35%;
  left: 62%;
  width: 30%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#my-popover4 {
  position: absolute;
  top: 10%;
  left: 30%;
  width: 30%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
