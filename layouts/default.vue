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
  components: {
    TheHeader,
    TheSidenav
  },
  data(){
    return {
      displaySideNave : false
    }
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
