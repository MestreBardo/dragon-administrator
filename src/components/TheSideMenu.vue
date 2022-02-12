<template>
  <menu class="bg-primary">
    <router-link v-for="item in menu" :key='item.nome' :to="item" >
      {{item.nome}}
    </router-link>
  </menu>

</template>

<script>
import menu from '../config/menu.config.js';
export default {
  data() {
    return {
      menu,
    }
  },
}
</script>

<style scoped>
  menu {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
</style>