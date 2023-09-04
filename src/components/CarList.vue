<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        cars: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <section class="cars-list">
        <section class="cars" v-for="car in cars" :key="car">
            <CarItem :car="car"/>
        </section>
    </section>
</template>

<style scoped>
    .cars-list {
        display: flex;
        width: 100%;
        padding: 0px 20px;
        flex-wrap: wrap;
    }

    .cars-list .cars {
        flex-basis: 25%;
        margin: 20px 75px;
    }

    .cars {
        border-radius: 20px;
    }
</style>