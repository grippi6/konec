<script setup>
import TheHeader from "@/components/TheHeader.vue";

</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="content">
      <div class="fff">
        <h1>О сериале "Кухня"</h1>
        <p>Российский комедийный ситком о закулисной жизни одного из столичных лакшери-ресторанов. Сага со звездным актерским составом об истории сотрудников одного московского ресторана высокой кухни. Заведение с громким названием «Клод Моне» славится на всю столицу своей изысканной кухней, от посетителей самого высокого ранга нет отбоя, а повара здесь самые настоящие небожители.</p>
      </div>
      <div class="fff">
        <h1>главные герои</h1>
        <p>Главные герои сериала - Юлия Варламова, Максим Дрозд, Анастасия Панина, Дмитрий Назаров, Сергей Лавыгин, Мария Голубкина и другие. Сюжет сериала полон юмора, интриг и неожиданных поворотов. "Кухня" завоевала популярность среди зрителей и стала одним из самых успешных российских комедийных сериалов.</p>
      </div>
      <div class="fff">
        <h1>История создания сериала</h1>
        <p>Телесериал «Кухня» впервые вышел в 2012 году. Его производством занимались компании Yellow, Black and White и KeyStone Production по заказу канала СТС, где он транслировался. «Кухня» растянулась на шесть сезонов и завершилась через четыре года, но собрала несколько спин-оффов и полнометражных фильмов.</p>
      </div>
      <div class="fff">
        <h1>О сериале "Кухня"</h1>
        <p>«Кухня» — российский телесериал в жанре ситуационной комедии с элементами мелодрамы. Создан компаниями Yellow, Black and White и KeyStone Production по заказу телеканала «СТС». Сериал посвящён работе сотрудников элитного ресторана французской кухни «Claude Monet» (1—4 сезоны) и ресторана «Victor» (5—6 сезоны), находящегося внутри отеля «ELEON».</p>
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
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

h1 {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: goldenrod;
}

p {
  width: 100%;
  font-size: 20px;
  line-height: 1.6;
  color: goldenrod;
  text-align: center;
}
</style>