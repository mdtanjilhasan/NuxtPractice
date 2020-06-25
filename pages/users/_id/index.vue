<template>
<div>
	<h1>A single user, with Id := {{ $route.params.id }}</h1> 
	<!-- we use id here for our file name is _id.vue if we use _user.vue then we should use $route.params.user -->
	<button @click="goBack">Back</button>
</div>
	
</template>

<script>
	export default{
		validate(data){ // this is a new property that is recognized by nuxt js not by vue js
			return /^\d+$/.test(data.params.id);
		},
		layout: 'users',
		methods:{
			goBack(){
				this.$router.back();
			}
		},
		head: 'Post Details'
	}
</script>