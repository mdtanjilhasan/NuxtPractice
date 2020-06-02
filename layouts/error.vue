<template>
	<!-- this is for replacing default error page  -->
	<div class="error-wrapper">
		<h1>An Error Ouccred. Oops Something went wrong.</h1>		
		<nuxt-link to="/" class="home-button">go back to home</nuxt-link>
	</div>
</template>
<style scoped>
	.error-wrapper{
		display: flex;
		width: 100%;
		height: 95vh;
		justify-content: center;
		align-items: center;
	}
	.error-wrapper h1{
		text-transform: uppercase;
		color: red;
		width: 100%;
		display: flex;
	}
	.home-button{
		display: flex;
		text-decoration: none;
		text-transform: uppercase;
		color: #ccc;
	}
</style>