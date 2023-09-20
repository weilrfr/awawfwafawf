<script setup>
import { useAuto } from "../composable/useAuto";
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import Panel from 'primevue/panel';
import Divider from 'primevue/divider';

const router = useRouter();
const { auto, getAuto } = useAuto();
const route = useRoute();

onMounted(async() => {

    await getAuto(route.params.id);

})

</script>

<template>
    <div class="car-info" v-if="auto">
        <div class="img">
            <img alt="car" class="car-img" :src="auto.image"/>
        </div>
        <div class="info">
            <Panel header="Header">
                <p>Цена: {{ auto.price }}</p>
                <Divider />
                <p>Объем: {{ auto.volume }}</p>
                <Divider />
                <p>Кузов: {{ auto.carcase }}</p>
                <Divider />
                <p>Город: {{ auto.city }}</p>
                <Divider />
                <p>Год выпуска: {{ auto.year }}</p>
                <Divider />
                <p>Объем двигателя: {{ auto.volume }}</p>
                <Divider />
                <p>Цвет: {{ auto.color }}</p>
                <Divider />
            </Panel>
        </div>
    </div>
</template>

<style scoped>
    .car-info {
        display: flex;
    }
    .car-img {
        width: 100%;
    }
    .img {
        flex-basis: 20%;
    }
    .info {
        flex-basis: 50%;
    }
</style>