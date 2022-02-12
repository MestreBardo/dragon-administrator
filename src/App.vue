<template>
    <div class="flex relative h-100">
      <the-side-menu />

      <div class="w-100 overflow-auto-y">
        <the-mapper/>
        <router-view />
      </div>
    
    </div>
</template>

<script>
import TheMapper from './components/TheMapper.vue';
import TheSideMenu from './components/TheSideMenu.vue';
export default {
  components: { TheMapper, TheSideMenu },
  name: 'App',
  data() {
    return {
      titulo: 'Era Do Dragão',
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed&display=swap');
@font-face {
  font-family: inquisition;
  src: url('./assets/fonts/Inquisition.ttf');
}
#app {
  height: 100%;
}

.bg-primary {
  background-color: #9e0200;
}

.relative {
  position: relative;
}
.flex {
  display: flex;
}
.column {
  flex-direction: column;
}
.w-100 {
  width: 100%;
}
.overflow-auto-y {
  overflow-y: auto;
}

.h-100 {
  height: 100vh;
}
html,body {
  height: 100%;
}


body {
  margin: 0;
  background-image: url('./assets/images/background.png');
}

</style>