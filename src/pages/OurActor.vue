<template>
  <TheHeader></TheHeader>
  <div class="content-actor">
    <div class="carts">
      <div class="carts-actors" v-for="(actor, index) in actors" :key="index">
        <img :src="actor.image" :alt="actor.name">
        <p>{{ actor.name }}</p>
        <h3>{{ actor.role }}</h3>
        <h5>{{ actor.description }}</h5>
      </div>
    </div>
  </div>
</template>


<script setup>
import TheHeader from "@/components/TheHeader.vue";
import actorsData from "/src/data/actor.json";

const actors = actorsData;

</script>

<style scoped>
.content-actor {
  width: 100%;
  height: 1320px;
  padding: 20px;
  box-sizing: border-box;
  background: url("../assets/image/постер1.jpg") no-repeat fixed;

}
.carts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
  row-gap: 5%;
  column-gap: 5%;
}
.carts-actors {
  text-align: center;
  background: white;
  border-radius: 13px;
  border: white solid 10px;
  transition: 1.3s all ease;
  &:hover{
    transform: scale(1.3) rotate(4deg) translate(10px);
  }
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
.carts-actors img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: 1.3s all ease;
  &:hover{
    transform: scale(1.03) ;
  }
}

</style>

