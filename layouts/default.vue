<template>
  <div>
    <TheHeader @sidenavToggle='displaySideNave = !displaySideNave'/>
    <TheSidenav
    :show="displaySideNave"
    @close="displaySideNave = false"
    />
    <nuxt />
  </div>
</template>
<script>
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'

export default {
  // middleware: 'middlewareName', // for those who use this layouts
  components: {
    TheHeader,
    TheSidenav
  },
  data(){
    return {
      displaySideNave : false
    }
  },
   head: {
    // script: [
    //   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    // ],
    // link: [
    //   { rel: 'stylesheet', href: '~/assets/css/main.css' }
    // ]
  }
}
</script>
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
