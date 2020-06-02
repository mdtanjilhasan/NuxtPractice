<template>
  <div>
    <Header/>
    <header>USER SECTION</header>
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/Header.vue' // component uses for global use

export default {
  components: {
    Header
  }
}
</script>
<style>
button{
  text-transform: uppercase;
  cursor: pointer;
  background-color: green;
  color: #fff;
}
</style>
