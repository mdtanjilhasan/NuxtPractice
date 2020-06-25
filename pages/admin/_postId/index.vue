<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>
import AdminPostForm from '~/components/Admin/AdminPost'
import axios from 'axios'
export default {
    components:{
        AdminPostForm
    },
    layout:'admin',
    asyncData(contex){ 
        return axios.get(process.env.baseUrl+'/posts/'+contex.params.postId+'.json')
            .then(response => {
                return{
                    loadedPost : {...response.data,postId:contex.params.postId}
                } 
            })
            .catch(exception => contex.error(exception));
    },
    methods:{
        onSubmitted(editedPost){
            this.$store.dispatch('editPost',editedPost)
            .then(() => {
                this.$router.push('/admin');
            })
        }
    }
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