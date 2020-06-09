<template>
    <section class="featured-posts">
      <PostPreview
        postId="1"
        :is-admin="isAdmin"
        title="Dynamic Post Title One"
        previewText="Short post Description"
        thumbnail="http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      />
      <PostPreview
        postId="2"
        :is-admin="isAdmin"
        title="Dynamic Post Title Two"
        previewText="Description goes here"
        thumbnail="http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      />
      <PostPreview
        postId="3"
        :is-admin="isAdmin"
        title="Dynamic Post Title Three"
        previewText="Hello there i am a post short description"
        thumbnail="http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      />
    </section>
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components:{
    PostPreview
  },
  props:{
    isAdmin:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>