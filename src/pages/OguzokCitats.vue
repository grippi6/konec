<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
<TheHeader></TheHeader>
  <div class="content">
    <div class="citats-container">
      <div class="fff">
        <p>"Все, что мы делаем, оставляет следы на нашем пути."</p>
      </div>
      <div class="fff">
        <p>"Иногда самое сложное в жизни – это принять решение, которое не подведет в последствии."</p>
      </div>
      <div class="fff">
        <p>"Самые ценные вещи в жизни невозможно купить. Они приходят к нам в виде любви, дружбы и понимания."</p>
      </div>
      <div class="fff">
        <p>"Счастье – это когда ты находишь своё место в мире, даже если это место временно."</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
  background: url("../assets/image/постер1.jpg") no-repeat fixed;
  width: 100%;
  height: 1320px;
}
.fff {
  background: rgba(12, 9, 9, 0.8);
  border-radius: 20px;
  margin-bottom: 7%;
  margin-top: 100px;
  animation: fadeIn 1s ease-in-out;
  color: goldenrod;
}
</style>