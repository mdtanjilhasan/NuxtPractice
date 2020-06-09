<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>
<script>
import AdminPostForm from '~/components/Admin/AdminPost'
export default {
    components:{
        AdminPostForm
    },
    data(){
        return{
            loadedPost:{
                author: 'Tanjil',
                title: 'My Awesome Post',
                content: 'Super amazing, Thanks for that!',
                thumbnailLink: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
            }
        }
    },
    layout:'admin'
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>