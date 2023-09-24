<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { onMounted } from "vue";
    import { useAuto } from "../composable/useAuto";
    import { useRouter } from 'vue-router'

    const router = useRouter();

    const { autoListRemake, getAutoList, loading } = useAuto();

    onMounted(async() => {
        await getAutoList();
    })

    function goToCarUrl(id) {
        router.push({ name: 'car', params: { id }});
    }

</script>

<template>
    <section class="cars-list">
        <section class="cars" v-for="auto in autoListRemake" :key="auto" :loading="loading.autoList">
            <CarItem :auto="auto" @click="goToCarUrl(auto.id)"/>
        </section>
    </section>
</template>

<style scoped>
    .cars-list {
        display: flex;
        width: 100%;
        padding: 0px 20px;
        flex-wrap: wrap;
        margin: 20px 0px 20px 0px;   
        justify-content: space-evenly;
    }

    .cars-list .cars {
        flex-basis: 20%;
    }
</style>