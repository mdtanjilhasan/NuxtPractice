<template>
	<!-- this is now the wrapper for user folder files -->
	<div>
		<input type="text" v-model="userId">
		<button @click="getSingleUserPage">load user</button>
		<nuxt-child/> <!-- as like as @yield('content') in laravel -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userId : ''
			}
		},
		methods:{
			getSingleUserPage(){
				this.$router.push('/users/'+this.userId);
			}
		},
		layout: 'users' // this is a new property that is recognized by nuxt js not by vue js
	}
</script>