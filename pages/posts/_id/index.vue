<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div>Updated on: {{ loadedPost.updatedOn }}</div>
                <div>Written by: {{ loadedPost.author }}</div>
            </div>
            <p>{{ loadedPost.content }}</p>
        </section>
        <section class="feedback">
            <p>let us know what's in your mind <a href="mailto:email@domail.com">email@domain.com</a></p>
        </section>
    </div>
</template>
<style scoped>
.single-post-page{
    display: block;
    width: 100%;
    text-align: center;
}
</style>
<script>
export default {
    asyncData(contex,callback){ // this runs on server. before this component being created. so we can't access this keyword here or any method or properties in this component
        setTimeout(() => {
            callback(null,{
                loadedPost : {
                    postId: '1',
                    title: "Post One with ( ID: "+ contex.params.id +")", // contex.route.params.id is also wrok the same
                    previewText: 'post one short description goes here',
                    thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
                    author: 'Md. Tanjil Hasan',
                    updatedOn: new Date(),
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
                }
            })
        },1000)
    }
}
</script>