<script setup>
import Art from '@/components/Art/Art.vue'
</script>

<template>
  <header>
    <h1 class="header-h1">Your Art | Pinacoteca De São Paulo</h1>
  </header>
  <section class="museum">
    <Art
      title="J. Cunha"
      pictureSrc="https://i0.wp.com/almapreta.com.br/images/2024/05/jcunhacapa.jpeg?fit=1400%2C1056&ssl=1"
    ></Art>
    <Art
      title="Corpo Tropical"
      pictureSrc="https://pinacoteca.org.br/wp-content/uploads/2024/02/LF_Pina_JCunha-010.jpg"
      titleTwo="Barroco Safado"
      pictureSrcTwo="https://pinacoteca.org.br/wp-content/uploads/2024/02/LF_Pina_JCunha-1.jpg"
    ></Art>
    <Art
      title="na Ponta de Humaitá"
      pictureSrc="https://dorispinheiro.com.br/wp-content/uploads/2024/04/03-1-scaled.jpg"
      titleTwo="Península de Itapagipe"
      pictureSrcTwo="https://dorispinheiro.com.br/wp-content/uploads/2024/04/05-1-scaled.jpg"
    ></Art>
    <Art
      title="Farture no Rio Vermelho"
      pictureSrc="https://bencao.casarosasalvador.com.br/wp-content/uploads/2020/08/4-Fartura-no-Rio-Vermelho-2000-Te%CC%81cnica-mista_-colagem-e-acri%CC%81lica..jpg"
      titleTwo="Yemanjå"
      pictureSrcTwo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKUJptD1tnfT4ckQxOd5X0EX1mdRmTADwVBUBNlusUASK78__n5AT2j0SRsQBD-W4PLI&usqp=CAU"
    ></Art>
  </section>
  <section class="museum">
    <Art
      title="Cecilia Vicuña"
      pictureSrc="https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/3143-707341601944/a-qa-with-cecilia-vicuna-a-great-woman-artist-900x450-c.jpg"
    ></Art>
    <Art
      title="Quipu Menstrual"
      pictureSrc="https://images.saatchiart.com/saatchi/771176/art/2565211/1635131-HSC00001-7.jpg"
      titleTwo="Frente Cultural"
      pictureSrcTwo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ou-1tiI2BdW0HvhdsJlNALmsE9oICgKF9LfG7RqduJ4iyeKkzOVTXKHPAb3ppU1eXZw&usqp=CAU"
    ></Art>
    <Art
      title="Autobiografía"
      pictureSrc="https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/08/vicuna-auto.webp?resize=780%2C701&quality=95&ssl=1"
      titleTwo="Karl Marx"
      pictureSrcTwo="https://images.jacobinmag.com/wp-content/uploads/2022/09/27182013/vicunafeature.jpg"
    ></Art>
    <Art
      title="Liderezas"
      pictureSrc="https://www.guggenheim.org/wp-content/uploads/2022/05/art-x.2021.375-vicuna.jpg"
      titleTwo="Sol y dar y dad: Una palabra bailada"
      pictureSrcTwo="https://www.guggenheim.org/wp-content/uploads/2022/05/art-x.2021.637-vicuna-still-870x662.jpg"
    ></Art>
  </section>
  <section class="museum">
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1547891654-e66ed7ebb968"
    ></Art>
    <Art
      title="Mona Lisa"
      pictureSrc="https://images.unsplash.com/photo-1536924940846-227afb31e2a5"
      titleTwo="Mona Lisa"
      pictureSrcTwo="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
    ></Art>
  </section>
</template>

<style scoped>
.header-h1 {
  align-items: center;
  background-color: #dde8f4;
  color: #f95738;
  display: flex;
  font-size: 70px;
  height: 100px;
  justify-content: center;
  margin: 80px auto;
  padding: auto;
  text-align: center;
  width: 90%;
}
.museum {
  background-color: #dde8f4;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  width: 90%;
  margin: auto;
  margin-top: 100px;
}
</style>
