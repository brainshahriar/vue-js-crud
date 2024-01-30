<style>
@import './Login.css';
</style>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        // async login(){
        //     const login = await axios.post
        // }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'HomePage' });
        }
    }
}
</script>

<template>
    <img class="logo" src="../assets/logo.png" alt="">
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">
        <button v-on:click="login()">Login</button>
        <p>
            <router-link to="/sign-up">Login</router-link>
        </p>
    </div>
</template>