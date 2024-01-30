<style>
@import './Add.css';
</style>

<script>
import Header from './Header.vue';

export default {
    name: 'AddPage',
    data(){
        return{
            restaurant:{
                name:'',
                contact:'',
                address:'',
            }
        }
    },
    methods: {
        register(){
            console.log(this.restaurant);
        }
    },
    components:{
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'LoginPage' });
        }
    }
}
</script>

<template>
    <Header/>
    <h1>Welcome to add restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="this.restaurant.name">
        <input type="text" placeholder="Enter Adress" v-model="this.restaurant.address">
        <input type="text" placeholder="Enter Contact" v-model="this.restaurant.contact">
        <button type="button" v-on:click="register()">Add</button>
    </form>
</template>