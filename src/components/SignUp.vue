<style>
@import './SignUp.css';
</style>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp() {
            const register = await axios.post('http://localhost:3000/users',{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log(register.data);
            if(register.status == 201){
                localStorage.setItem('user-info', JSON.stringify(register.data));
                this.$router.push({name:'HomePage'})
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'});
            }
        }
    }
}
</script>

<template>
    <img class="logo" src="../assets/logo.png" alt="">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button v-on:click="signUp()">Sign Up</button>
        <p>
            <router-link to="/login">Sign Up</router-link>
        </p>
    </div>
</template>