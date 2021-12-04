<template>
  <v-app id="app">
    <div class="home__header">
      <h1>Secret Santa</h1>
    </div>
    <home />
  </v-app>
</template>
<script>
import Home from './views/Home.vue'

export default {
  components: {
    Home
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.home {
  font-family: Satisfy, cursive;
}

.home__header {
  background-color: #e53e3e;
  color: #ffff;
  height: 50px;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
}

.home__header > h1 {
  font-weight: 100;
}

.home__footer {
  position: fixed;
  bottom: 0px;
  margin: 0 auto;
}
</style>
