<style>
@import './Home.css';
</style>

<script>
export default {
    name: 'HomePage',
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<template>
    <h1>Home</h1>
</template>