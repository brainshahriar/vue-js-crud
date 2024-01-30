<style>
@import './Home.css';
</style>

<script>
import Header from './Header.vue';
import axios from 'axios'

export default {
    name: 'HomePage',
    data(){
        return{
            name:'',
            restaurant:[]
        }
    },
    components:{
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'LoginPage' });
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        this.restaurant=result.data
    }
}
</script>

<template>
    <Header/>
    <h1>Hello <b class="name">{{name}}</b>, Welcome on Home Page</h1>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
    </tr>
</template>