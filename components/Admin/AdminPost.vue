<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton 
        type="button" 
        style="margin-left:10px;"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton>
    </form>
</template>
<script>
import AppButton from '~/components/UI/AppButton'
import AppControlInput from '~/components/UI/AppControlInput'
export default {
    props:{
        post:{
            type: Object,
            required: false
        }
    },
    data(){
        return{
            editedPost:this.post ? { ...this.post } : { // ... spread operator. get all data inside props and make and object
                author:'',
                title:'',
                thumbnail:'',
                previewText:'',
                content:''
            }
        }
    },
    methods:{
        onSave(){
            // save the post
            this.$emit('submit',this.editedPost);
        },
        onCancel(){
            // navigate back
            this.$router.push('/admin');
        }
    },
    components:{
        AppControlInput,
        AppButton
    }
}
</script>