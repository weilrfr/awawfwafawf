<script setup>
    import ButtonDelete from '@/components/ButtonDelete.vue';
    import CarList from '@/components/CarList.vue';
    import Header from '@/components//layouts/Header.vue';
    import Footer from '@/components/Footer.vue';
    import CarTable from '@/components/CarTable.vue';
    import SideBar from '@/components/SideBar.vue';

    const carsArray = [
        // {
        //     brand: 'BMW',
        //     price: 2000000,
        //     year: 1994,
        //     volume: 2.4,
        //     color: '#FF0000',
        //     img: 'https://s.yimg.com/ny/api/res/1.2/RgqfQUIfVgdy6PBOXUVKPQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/motorious_297/627e2f3c3d4e1f9b2a0062bc42a7c626'
        // },
        {
            brand: 'Mercedes',
            price: 2500000,
            year: 1994,
            volume: 4.0,
            color: '#FF0000',
            img: 'https://s.auto.drom.ru/i24198/c/photos/fullsize/mercedes-benz/s-class/mercedes-benz_s-class_540689.jpg'
        },
        {
            brand: 'Mercedes',
            price: 2500000,
            year: 1994,
            volume: 4.0,
            color: '#FF0000',
            img: 'https://s.auto.drom.ru/i24198/c/photos/fullsize/mercedes-benz/s-class/mercedes-benz_s-class_540689.jpg'
        },
        {
            brand: 'Mercedes',
            price: 2500000,
            year: 1994,
            volume: 4.0,
            color: '#FF0000',
            img: 'https://s.auto.drom.ru/i24198/c/photos/fullsize/mercedes-benz/s-class/mercedes-benz_s-class_540689.jpg'
        }
    ];
</script>

<template>
    <Header/>
    <CarList :cars="carsArray"/>
    <SideBar/>
    <CarTable :cars="carsArray"/>
    <Footer/>
</template>

<style scoped>
    
</style>
