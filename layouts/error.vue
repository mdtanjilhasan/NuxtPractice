<template>
	<!-- this is for replacing default error page  -->
	<div class="error-wrapper">
		<h1> Oops Something went wrong.</h1>		
		<p>Back To <a href="/">home</a></p>
	</div>
</template>
<style scoped>
	.error-wrapper{
		text-align: center;
	}
	.error-wrapper h1{
		text-transform: uppercase;
		color: red;
	}
	.error-wrapper a{
		text-decoration: none;
		text-transform: uppercase;
		color: maroon;
	}
</style>