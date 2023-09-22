<script setup>
    import Header from '@/components//layouts/Header.vue';
    import Footer from '@/components//layouts/Footer.vue'
    import SideBar from '@/components/SideBar.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <section class="layout-content">
        <div class="sidebar-cont">
            <SideBar/>
        </div>
        <div class="content">
            <Header/>
            <router-view/>
            <Footer/>
        </div>
    </section>
</template>

<style scoped>
    .layout-content {
        display: flex;
    }
    .content {
        flex-basis: 98%;
    }
    .sidebar-cont {
        flex-basis: 2%;
    }
</style>