<template>
    <div class="post-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<style scoped>
.post-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components:{
    PostList
  },
  asyncData(contex,callback){ // this runs on server. before this component being created. so we can't access this keyword here or any method or properties in this component
    setTimeout(() => {
        callback(null,{
            loadedPosts : [
                { postId: '1',  title: "Post One", previewText: 'post one short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                { postId: '2',  title: "Post Two", previewText: 'post two short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                { postId: '3',  title: "Post Three", previewText: 'post three short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
            ]
        });
    },1500);
  },
}
</script>