<script setup>
import ContactAnswer from '@/components/ContactProp/ContactAnswer.vue'
import ContactQuestion from '@/components/ContactProp/ContactQuestion.vue'
</script>

<template>
  <div class="page">
    <img class="links" src="@/assets/images/Screenshot 2024-06-24 at 14.58.05.png" />
    <form>
      <label class="box" for="fname"><h2>First name:</h2></label>
      <input type="text" id="fname" name="fname" placeholder="John" /><br />
      <label class="box" for="lname"><h2>Last name:</h2></label>
      <input type="text" id="lname" name="lname" placeholder="Doe" /><br />
      <label class="box" for="lname"><h2>Country:</h2></label>
      <input type="text" id="lname" name="lname" placeholder="Germany" /><br /><br />
      <h2>Which of our artists would you like to visit?</h2>
      <input type="radio" id="vehicle1" name="vehicle1" value="food" />
      <label for="vehicle1"> J. Cunha</label><br />
      <input type="radio" id="vehicle2" name="vehicle2" value="art" onclick="showArtQuestions()" />
      <label for="vehicle2"> Cecilia Vicuña</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Lygia Clark</label><br /><br />
      <h2>What part of our city would you like to visit?</h2>
      <input type="radio" id="vehicle1" name="vehicle1" value="food" />
      <label for="vehicle1"> Parco Sempione</label><br />
      <input type="radio" id="vehicle2" name="vehicle2" value="art" onclick="showArtQuestions()" />
      <label for="vehicle2"> Palacio de Deportes</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Jardin Público</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Cementerio Monumental</label><br /><br />
      <h2>Which of our hotels would you like to visit?</h2>
      <input type="radio" id="vehicle1" name="vehicle1" value="food" />
      <label for="vehicle1"> Ibis Sao Paulo</label><br />
      <input type="radio" id="vehicle2" name="vehicle2" value="art" onclick="showArtQuestions()" />
      <label for="vehicle2"> 360 Liberdade</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Sooz Hotel Collection</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Charlie Hotel Atmosfera Paulista</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Hotel Trianon Paulista </label><br /><br />
      <h2>Which of our restaurants would you like to visit?</h2>
      <input type="radio" id="vehicle1" name="vehicle1" value="food" />
      <label for="vehicle1"> Notiê</label><br />
      <input type="radio" id="vehicle2" name="vehicle2" value="art" onclick="showArtQuestions()" />
      <label for="vehicle2"> Cuia</label><br />
      <input type="radio" id="vehicle3" name="vehicle3" value="city" />
      <label for="vehicle3"> Jamile</label><br />
      <div>
        <input type="submit" value="Submit" class="submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.submit {
  font-size: 20px;
  border-radius: 6px;
  color: #723486;
  background-color: white;
  border-color: white;
  display: flex;
  margin: 20px auto;
}
.page {
  background-color: #dde8f4;
  width: 50%;
  margin: 50px auto;
  padding: 50px 0 50px 50px;
  border-radius: 20px;
}

.links {
  width: 50%;
  display: flex;
  margin: auto;
}

.h2 {
  font-size: 40px;
  margin: 0;
}

.hidden {
  display: none;
}
</style>
