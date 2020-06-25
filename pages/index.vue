<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components:{
    PostList
  },
  // asyncData(contex,callback){ // this runs on server. before this component being created. so we can't access this keyword here or any method or properties in this component
  //   setTimeout(() => {
  //       callback(null,{
  //           loadedPosts : [
  //               { postId: '1',  title: "Post One", previewText: 'post one short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
  //               { postId: '2',  title: "Post Two", previewText: 'post two short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
  //               { postId: '3',  title: "Post Three", previewText: 'post three short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
  //           ]
  //       });
  //   },1500);
  // },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts;
    }
  },
  head:{
    title: 'Home'
  }
  //  head () {
  //   return {
  //     script: [
  //       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
  //     ],
  //     link: [
  //       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
