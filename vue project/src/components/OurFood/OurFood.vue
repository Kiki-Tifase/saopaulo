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
const images4 = [
  {
    text: 'Serra da Canastra cheese pastries',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231148_T577_i.jpg'
  },
  {
    text: 'Squid tempura in tapioca',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231147_F7KH_i.jpg'
  },
  {
    text: 'Baião de Dois with butter beans',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231203_7A74_i.jpg'
  },
  {
    text: 'Leaf, mango and tomato salad',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202310241806_6MX2_i.jpg'
  }
]
const images5 = [
  {
    text: 'Our Oswaldo Aranha',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202301192252_NL4P_i.jpg'
  },
  {
    text: 'Baião de Dois with butter beans',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231203_7A74_i.jpg'
  },
  {
    text: 'Orecchiette with leeks',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231151_S841_i.jpg'
  },
  {
    text: 'Fish fillet',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231201_818D_i.jpg'
  }
]
const images6 = [
  {
    text: 'Cornmeal Cake',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231128_URK5_i.jpg'
  },
  {
    text: 'Yoghurt Pannacota',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231130_K2QO_i.jpg'
  },
  {
    text: 'Cookie',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202310311901_8171_i.jpg'
  },
  {
    text: 'Chocolate Mousse',
    src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/faa54616-c956-486a-a433-4312b0c3c63e/202207231210_YCTM_i.jpg'
  }
]
const images7 = [
  {
    text: 'Shrimp with chestnut cream',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Jamile_Fotografia_Outubro_219-1024x682-640x480_c.jpg'
  },
  {
    text: 'Seafood vinaigrette with toast in garlic oil.',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Jamile_Fotografia_Outubro_230-1024x682-640x480_c.jpg'
  },
  {
    text: 'Crispy salad',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Jamile_Fotografia_Outubro_245-683x1024-640x480_c.jpg'
  },
  {
    text: 'Breaded burrata w/ Sicilian sauce',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Burrata-empanada-com-creme-de-pistache-e-molho-de-siciliano-1024x920-640x480_c.png'
  }
]
const images8 = [
  {
    text: 'Glazed Pork Cheek',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Bochecha-de-porco-glaceada-com-quirela-cremosa-1024x682-640x480_c.jpg'
  },
  {
    text: 'Caramelized octopus bobó',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Bobo-de-polvo-caramelizado-com-bacon-e-arroz-de-coco-com-castanha-de-caju-e-chips-de-coco-682x1024-640x480_c.jpg'
  },
  {
    text: 'Grilled salmon with pistachio cream and mini vegetables.',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Salmao-grelhado-com-creme-de-pistache-e-mini-legumes-1024x683-640x480_c.jpg'
  },
  {
    text: 'Ancho steak with potatoes',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Bife-ancho-com-batata-rustica-e-duo-de-mostardas-819x1024-640x480_c.jpg'
  }
]

const images9 = [
  {
    text: 'Banana jam with farofa.',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/IMG_0154-1-640x480_c.jpg'
  },
  {
    text: 'Hot red fruit soup,',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Sopa-quente-de-frutas-vermelhas-sorvete-de-Zabaglione-e-praline-683x1024-640x480_c.jpg'
  },
  {
    text: 'Whiskey brigadeiro and cashew nut crunch',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/IMG_0154-1-640x480_c.jpg'
  },
  {
    text: 'Crème brûlée',
    src: 'https://jamilerestaurante.com.br/jamile/wp-content/uploads/2017/05/Creme-brulee-683x1024-640x480_c.jpg'
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
  <div class="entry">
    <div class="rest-desc">
      <div>
        <h2 class="name">CUIA</h2>
      </div>
      <img
        class="image"
        src="https://s2.glbimg.com/ftEbA0lHQt9ZQ2gU9Sq_fMCPUoc=/620x455/e.glbimg.com/og/ed/f/original/2022/03/06/salao-do-restaurante-edit09.jpg"
      />
    </div>
    <div class="menu">
      <Slider :images="images4" />
      <Slider :images="images5" />
      <Slider :images="images6" />
    </div>
  </div>
  <div class="entry">
    <div class="rest-desc">
      <div>
        <h2 class="name">JAMILE</h2>
      </div>
      <img class="image" src="https://www.verdict.co.uk/wp-content/uploads/2018/02/barbecoa.jpg" />
    </div>
    <div class="menu">
      <Slider :images="images7" />
      <Slider :images="images8" />
      <Slider :images="images9" />
    </div>
  </div>
  <!-- michelin guide best sao paulo retaurants: cuia and a casa do porco. -->
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
