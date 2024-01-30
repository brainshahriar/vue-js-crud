<style>
@import './Header.css';
</style>

<script>
export default {
    name: 'HeaderPage',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LoginPage'});
        }
    }
}
</script>

<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/">Update Restaurant</router-link>
        <router-link to="/login" @click="logout()">Logout</router-link>
    </div>
</template>