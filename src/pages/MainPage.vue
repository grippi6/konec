<script >
import TheHeader from "@/components/TheHeader.vue";

export default {
  components:{TheHeader},
  data(){
    return{
      audio:null,
      getAnimationStart:false
    }
  },
  methods: {
    play() {
      if (!this.getAnimationStart) {
        let audio = new Audio();
        audio.src = '../src/assets/video/The Cat Empire - The Lost Song (OST Кухня).mp3';
        audio.autoplay = true;
      } else {
        this.audio = null;
      }
    }
  }
}

</script>

<template>
  <TheHeader/>
  <div  class="content-main">
    <button class="play_btn" @click="play">
    <video  controls >
      <source src="/src/assets/video/chiken.mp4"  type="video/mp4"  />
    </video>
    </button>

  </div>
</template>

<style scoped>

.play_btn{
  margin-top: 10%;
  width: 50%;
  height:600px;
  background: none;
  border: none;
  cursor: pointer;
}

video {
  width: 100%;
  height: 100%;
  transition: 1.3s all ease;
  &:hover{
    transform: scale(1.1)translate(10px);
  }
}


.content-main{
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  background: url("../assets/image/постер1.jpg") no-repeat fixed center ;
  background-size: cover;
  height: 1000px;
  display: flex;
justify-content: center;

}
</style>
