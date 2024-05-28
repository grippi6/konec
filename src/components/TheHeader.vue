<script >

</script>

<template>
    <div class="header-start">
   <router-link class="ah" :to="{name:'main'}"><img src="../assets/image/лого.png" alt="" width="200px"></router-link>
  <router-link class="ah" :to="{name:'OurActor'}"><p>Актёры</p></router-link>
  <router-link class="ah" :to="{name:'About'}"><p >О Сериале</p></router-link>
  <router-link class="ah" :to="{name:'Oguzok'}"><p >Цитатки Огузка</p></router-link>
    </div>
</template>

<style scoped>
.header-start{

  align-items: center;
  width: 100%;
  background-color: brown;
  display: flex;
  justify-content: space-evenly;
}
.header-start p{
  color:gold;
  font-size:1.5em;
}
.ah{
  margin-top:10px ;
  text-decoration: none;
  margin-bottom: 10px;
}


.ah p {

  font-family: nyashasans;
}
</style>