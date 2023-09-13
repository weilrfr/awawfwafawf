<script setup>
    import ButtonDelete from '@/components/ButtonDelete.vue';
    import CarList from '@/components/CarList.vue';
    import Header from '@/components//layouts/Header.vue';
    import Footer from '@/components/Footer.vue';
    import CarTable from '@/components/CarTable.vue';
    import SideBar from '@/components/SideBar.vue';
    import Toasts from '@/components/Toasts.vue';
    import CarAddModal from '@/components/CarAddModal.vue';
</script>

<template>
    <section class="layout-content">
        <div class="sidebar-cont">
            <SideBar/>
        </div>
        <div class="content">
            <Toasts/>
            <Header/>
            <CarAddModal/>
            <CarList/>
            <CarTable/>
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