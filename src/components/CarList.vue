<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { onMounted } from "vue";
    import { useAuto } from "../composable/useAuto";
    const { autoListRemake, getAutoList, loading } = useAuto();
    onMounted(async() => {
        await getAutoList();
    })
</script>

<template>
    <section class="cars-list">
        <section class="cars" v-for="auto in autoListRemake" :key="auto" :loading="loading.autoList">
            <CarItem :auto="auto"/>
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