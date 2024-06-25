<script setup>
import Hotel from '@/components/Hotel/Hotel.vue'
</script>

<template>
  <header>
    <h1 class="header">Your Hotels | Top Five Hotels in Sao Paulo</h1>
  </header>

  <Hotel
    title="Ibis Sao Paulo"
    location="Hotel in Morumbi, Sao Paulo"
    price="114/night"
    :rating="5"
    link="https://www.booking.com/hotel/br/ibis-sapso-paulo-congonhas.en-gb.html"
    imgSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/485539981.jpg?k=e45d42623adaed1e1964d58dcdb7720009159ba2551e8b14491ffccebe764e93&o=&hp=1"
  >
    <template #text>
      The accommodation offers a 24-hour front desk, and luggage storage for guests. At Ibis São
      Paulo Congonhas, the rooms are equipped with a flat-screen TV with satellite channels, a
      private stocked bathroom and a wardrobe. The accommodation offers a continental or buffet
      breakfast that, for guests' convenience, is served daily from 4:00. You can play billiards or
      enjoy a happy hour at Ibis São Paulo Congonhas' bar. The hotel is located 2.2 Km from Shopping
      do Ibirapuera., while Ibirapuera Park is 7 km away.
    </template>
  </Hotel>

  <Hotel
    title="360 Liberdade "
    location="Hotel in Liberdade, Sao Paulo"
    price="78/night"
    :rating="5"
    link="https://www.booking.com/hotel/br/360-suites-liberdade-apartamentos-mobiliados.en-gb.html"
    imgSrc="https://images.trvl-media.com/lodging/98000000/97040000/97031600/97031505/56503900.jpg?impolicy=resizecrop&rw=598&ra=fit"
  >
    <template #text>
      360 Liberdade offers accommodation within 1.3 km of the centre of Sao Paulo, with free WiFi,
      and a kitchenette with a microwave, a stovetop and a minibar. This 4-star apartment offers a
      24-hour front desk and a lift. The apartment features family rooms. At the apartment complex,
      the units are equipped with a desk, a TV, a private bathroom, bed linen and towels. The units
      will provide guests with kitchenware.
    </template>
  </Hotel>

  <Hotel
    title="Sooz Hotel Collection"
    location="Hotel in Downtown Sao Paulo"
    price="95/night"
    :rating="5"
    link="https://www.booking.com/hotel/br/boulevard-sapso-luis.en-gb.html"
    imgSrc="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/438753270.jpg?k=2daf26252e3243c414b3d0b5b3fca7218a9760d8aa31710d1f5e919e4dc72b89&o=&hp=1"
  >
    <template #text>
      Featuring free WiFi, Sooz Hotel Collection offers accommodation in Sao Paulo, 400 metres from
      Downtown Sao Paulo. Each room at this hotel is air conditioned and has a flat-screen TV with
      cable channels. Certain rooms have a seating area to relax in after a busy day. The rooms come
      with a private bathroom. There is a 24-hour front desk at the property. Abril Theater is 900
      metres from Sooz Hotel Collection, while Sao Paulo Metropolitan Cathedral is 1 km away.
    </template>
  </Hotel>
  <Hotel
    title="Charlie Hotel Atmosfera Paulista"
    location="Hotel in Villa Mariana, Sao Paulo"
    price="63/night"
    :rating="4"
    link="https://www.booking.com/hotel/br/charlie-ana-rosa-soft-opening.en-gb.html"
    imgSrc="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/484689252.jpg?k=71f81b9a5e1b829dc0d5ea729613d0e7de2f3e70c6bd8c2f66197dddad0d19a5&o=&hp=1"
  >
    <template #text>
      The accommodation offers a 24-hour front desk, and luggage storage for guests. At Ibis São
      Paulo Congonhas, the rooms are equipped with a flat-screen TV with satellite channels, a
      private stocked bathroom and a wardrobe. The accommodation offers a continental or buffet
      breakfast that, for guests' convenience, is served daily from 4:00. You can play billiards or
      enjoy a happy hour at Ibis São Paulo Congonhas' bar. The hotel is located 2.2 Km from Shopping
      do Ibirapuera., while Ibirapuera Park is 7 km away.
    </template>
  </Hotel>
  <Hotel
    title="Hotel Trianon Paulista"
    location="Hotel in Jardim Paulista, Sao Paulo"
    price="172/night"
    :rating="4"
    link="https://www.booking.com/hotel/br/four-plus-trianon-paulista.en-gb.html"
    imgSrc="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/189896434.jpg?k=934fc9e610b18bc44f228dbc99e8f4c02e5bc3fe966368bc32b5414b1730f5c7&o=&hp=1"
  >
    <template #text>
      The accommodation offers a 24-hour front desk, and luggage storage for guests. At Ibis São
      Paulo Congonhas, the rooms are equipped with a flat-screen TV with satellite channels, a
      private stocked bathroom and a wardrobe. The accommodation offers a continental or buffet
      breakfast that, for guests' convenience, is served daily from 4:00. You can play billiards or
      enjoy a happy hour at Ibis São Paulo Congonhas' bar. The hotel is located 2.2 Km from Shopping
      do Ibirapuera., while Ibirapuera Park is 7 km away.
    </template>
  </Hotel>
</template>
<style scoped>
.header {
  align-items: center;
  background-color: #dde8f4;
  color: #2d7824;
  display: flex;
  font-size: 70px;
  height: 100px;
  justify-content: center;
  margin: 80px auto 0px;
  padding: auto;
  text-align: center;
  width: 90%;
}
</style>
