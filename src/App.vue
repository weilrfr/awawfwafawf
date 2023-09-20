<script setup>
    import CarList from '@/components/CarList.vue';
    import Header from '@/components//layouts/Header.vue';
    import Footer from '@/components/Footer.vue';
    import CarTable from '@/components/CarTable.vue';
    import SideBar from '@/components/SideBar.vue';
    import CarAddModal from '@/components/CarAddModal.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <section class="layout-content">
        <div class="sidebar-cont">
            <SideBar/>
        </div>
        <CarAddModal/>
        <div class="content">
            <Header/>
            <!-- <CarAddModal/>
            <CarList/>
            <CarTable/>
            <Footer/> -->
            <router-view/>
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