<template>
  <div>
    <nuxt />
  </div>
</template>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body{
  margin: 0;
}
ul{
  margin: 0;
}
</style>
<script>
export default {
  middleware: 'auth',// for multiple middleware we can use array
}
</script>