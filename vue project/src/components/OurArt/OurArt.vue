<template>
  <header>
    <h1 class="section-header-h1">Your Art</h1>
  </header>
  <section class="section-museum">
    <article class="figure-big-img-columns">
      <figure class="logo-holder-big">
        <img class="sml-img2" src="@/assets/images/museum1.jpeg" />
        <p class="text">The Great Museum</p>
      </figure>
    </article>
    <figure class="figure-sml-img-columns">
      <article class="logo-holder">
        <img src="@/assets/images/sml-img2.avif" class="sml-img1" />
        <p class="text">Girl with a Pearl Earring</p>
      </article>
      <article class="logo-holder">
        <img src="@/assets/images/sml-img3.avif" class="sml-img1" />
        <p class="text">Mona Lisa</p>
      </article>
    </figure>
    <figure class="figure-sml-img-columns">
      <article class="logo-holder">
        <img src="@/assets/images/sml-img4.avif" class="sml-img1" />
        <p class="text">The Starry Night</p>
      </article>
      <article class="logo-holder">
        <img src="@/assets/images/sml-img5.avif" class="sml-img1" />
        <p class="text">The Birth of Venus</p>
      </article>
    </figure>
    <figure class="figure-sml-img-columns">
      <article class="logo-holder">
        <img src="@/assets/images/sml-img6.avif" class="sml-img1" />
        <p class="text">The Scream</p>
      </article>
      <article class="logo-holder">
        <img src="@/assets/images/sml-img7.avif" class="sml-img1" />
        <p class="text">Guernica</p>
      </article>
    </figure>
  </section>
</template>

<style>
.section-header-h1 {
  align-items: center;
  background-color: beige;
  color: #606c38;
  display: flex;
  font-size: 30px;
  height: 100px;
  justify-content: center;
  margin: 80px auto;
  padding: auto;
  text-align: center;
  width: 90%;
}

/* where it gets crazy */
.section-museum {
  background-color: #606c38;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  width: 90%;
}

.logo-holder,
.logo-holder-big {
  position: relative;
}

.logo-holder,
.smlimg1,
.sml-img2,
.logo-holder .text {
  transition: opacity 0.5s ease-in-out;
}
.logo-holder-big,
.smlimg1,
.sml-img2,
.logo-holder-big .text {
  transition: opacity 0.5s ease-in-out;
}

.logo-holder .text,
.logo-holder-big .text {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
}

.logo-holder:hover .sml-img1 .sml-img2 {
  opacity: 0;
}
.logo-holder:hover .text {
  opacity: 1;
}
.logo-holder-big:hover .sml-img1 .sml-img2 {
  opacity: 0;
}
.logo-holder-big:hover .text {
  opacity: 1;
}

.figure-sml-img-columns {
  margin: auto;
  width: 300px;
}
.figure-big-img-columns {
  margin: auto;
  width: 1250px;
}

.text {
  font-size: 40px;
  bottom: 0;
  opacity: 0;
  color: black;
  background-color: white;
  margin-bottom: 10px;
}

.sml-img1 {
  width: 100%;
  margin-bottom: 17px;
}
.sml-img {
  width: 100%;
  padding: auto;
}
</style>
