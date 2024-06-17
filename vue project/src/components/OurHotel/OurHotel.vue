<template>
  <header>
    <h1 class="section-header-h1">Your Hotels</h1>
  </header>
  <article class="article-hotel">
    <img class="section-hotel-image" src="@/assets/images/visualsofdana-T5pL6ciEn-I-unsplash.jpg" />
    <article class="section-hotel-desc">
      <h2 class="section-hotel-text">A Hotel</h2>
      <p class="section-hotel-tiny">Sao Paulo, Brazil</p>
      <section class="section-hotel1">
        <article class="section-header-stardiv">
          <img class="section-header-stars" src="@/assets/images/star-2-512.png" alt="star" />
          <img class="section-header-stars" src="@/assets/images/star-2-512.png" alt="star" /><img
            class="section-header-stars"
            src="@/assets/images/star-2-512.png"
            alt="star"
          /><img class="section-header-stars" src="@/assets/images/star-2-512.png" alt="star" /><img
            class="section-header-stars"
            src="@/assets/images/star-2-512.png"
            alt="star"
          />
        </article>
        <p class="section-hotel-text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source.
        </p>
        <article class="section-hotel-price">
          <h3>$300</h3>
          <button class="section-hotel-button">Check Availability</button>
        </article>
      </section>
    </article>
  </article>
</template>
<style>
.section-header-stardiv {
  align-items: center;
  background-color: beige;
  display: flex;
  height: 20px;
  padding: 5px 0px 10px;
}

.section-header-stars {
  height: 30px;
  border-bottom: 2px #283618;
  display: flex;
  padding-top: 10px;
}

.section-hotel {
  align-items: center;
  background-color: red;
  display: flex;
  height: 150px;
  justify-content: center;
  text-align: center;
  margin: 10px auto;
  width: 40%;
}

.article-hotel {
  align-items: center;
  background-color: beige;
  display: flex;
  text-align: center;
  margin: -20px auto;
  width: 40%;
  height: 550px;
}

.section-hotel-image {
  width: 50%;
  align-items: center;
  padding: 15px;
  margin: 20px 0px;
}

.section-hotel-desc {
  display: grid;
  grid-template-columns: 1fr;
}

.section-hotel-text {
  text-align: left;
  border-bottom: 2px solid darkgreen;
  width: 90%;
  padding: 10px 2px 15px;
  margin: 0;
}

.section-hotel-price {
  border-bottom: 2px solid darkgreen;
  padding: 8px 1px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60px;
}

.section-hotel-price button,
.section-hotel-price h3 {
  border-radius: 20px;
  margin: auto 15px;
  padding: auto;
  font-size: 18px;
}

.section-hotel-price button:active {
  transform: translateY(2px);
}

.section-hotel-price button {
  background-color: darkgreen;
  color: white;
  padding: 9px 15px;
}
.section-hotel-price button:hover {
  background-color: red;
}

.section-hotel-tiny {
  width: 110px;
  text-align: left;
  border-bottom: 2px solid darkgreen;
  padding: 10px 2px 15px;
  margin: 0;
}

.article-hotel {
  margin-bottom: 150px;
}
</style>
