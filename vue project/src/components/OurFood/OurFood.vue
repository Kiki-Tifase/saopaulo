<script setup>
import Slider from '@/components/Slider/Slider.vue'

const images = [
  {
    text: 'Pastel de Queijo Canastra',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312071751_4B02_i.jpg'
  },
  {
    text: 'Croquete de Mandioca e Queijo Marajó',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312071751_TF87_i.jpg'
  },
  {
    text: 'Com maionese de pimenta de cheiro',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312071752_8HX6_i.jpg'
  },
  {
    text: 'Com maionese e vinagrete de quiabo',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312071757_6721_i.jpg'
  }
]
const images2 = [
  {
    text: 'Cuscuz Nordestino',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202401311629_726Y_i.jpg'
  },
  {
    text: 'Rubacão com Carne de Sol',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202401261547_4EWL_i.jpg'
  },
  {
    text: 'Nhoque de Vatapá',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312131600_CT1A_i.jpg'
  },
  {
    text: 'Rubacão Vegetariano',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202312071802_WGKS_i.jpg'
  }
]
const images3 = [
  {
    text: 'Toalha Felpuda',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202401111725_7HW8_i.jpg'
  },
  {
    text: 'Tartelete De Chocolate',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/262f5c1c-361b-4df6-8084-e8a50c17e6ae/202401111726_X51P_i.jpg'
  }
]
</script>

<template>
  <header>
    <h1 class="header">Your Food</h1>
  </header>
  <div class="entry">
    <div class="rest-desc">
      <div>
        <h2 class="name">NOTIÊ</h2>
      </div>
      <img
        class="image"
        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/38/dc/0e/cipo-resto-restaurant.jpg"
      />
    </div>
    <div class="menu">
      <Slider :images="images" />
      <Slider :images="images2" />
      <Slider :images="images3" />
    </div>
  </div>
  <!-- michelin guide best sao paulo retaurants: cuia and a casa do porco. -->
  <div class="entry">
    <div class="rest-desc">
      <div>
        <h2 class="name">NOTIÊ</h2>
      </div>
      <img
        class="image"
        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/38/dc/0e/cipo-resto-restaurant.jpg"
      />
    </div>
    <div class="menu">
      <Slider :images="images" />
      <Slider :images="images2" />
      <Slider :images="images3" />
    </div>
  </div>
  <div class="entry">
    <div class="rest-desc">
      <div>
        <h2 class="name">NOTIÊ</h2>
      </div>
      <img
        class="image"
        src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/38/dc/0e/cipo-resto-restaurant.jpg"
      />
    </div>
    <div class="menu">
      <Slider :images="images" />
      <Slider :images="images2" />
      <Slider :images="images3" />
    </div>
  </div>
</template>

<style scoped>
.header {
  align-items: center;
  background-color: #dde8f4;
  color: #b33434;
  display: flex;
  font-size: 70px;
  height: 100px;
  justify-content: center;
  margin: 80px auto 50px;
  padding: auto;
  text-align: center;
  width: 90%;
}
.menu {
  align-items: center;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  width: 55%;
  gap: 20px;
}

.image {
  width: 100%;
  margin: 0px 0px 0px 130px;
}
.rest-desc {
  position: relative;
}
.entry {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 290px;
}
.name {
  transform: rotate(-45deg);
  width: 300px;
  color: #b33434;
  font-size: 50px;
  background-color: #dde8f4;
  position: absolute;
  top: 7%;
  left: 5%;
  text-align: center;
}
</style>
