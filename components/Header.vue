<template>
    <header class="header">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
        </ul>
    </header>
</template>
<style scoped>
    .header{
        width: 100%;
        background-color: aqua;
    }
    ul{
        display: flex;
        justify-content: space-around;
    }
    ul li{
        list-style-type: none;
    }
    ul li a{
        text-decoration: none;
    }
</style>