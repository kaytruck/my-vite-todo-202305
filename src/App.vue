<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
// import MainTodo from './components/MainTodo.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
/* @import url('https://cdn.jsdelivr.net/npm/destyle.css@4.0.0/'); */
@import 'destyle.css';
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  /* width: 370px; */
  margin: 0 auto;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
