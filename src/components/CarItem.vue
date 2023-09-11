<script setup>
import { defineProps, computed } from 'vue';
import Card from 'primevue/card'
import Chip from 'primevue/chip';


const carRemake = computed(() => {
    return {
        ...props.car,
        price: props.car.price + "₽",
    }
})

function changeColor(color) {
    const crappyColor = ['#FF0000', '#00FF00', '#00000FF'];
    if (crappyColor.includes(color)) {
        return true
    } 
    return false
}
</script>

<template>
    <Card>
        <template #header>
            <img :src="carRemake.img" alt="car" class="car-image"/>
        </template>
        <template #title> {{ carRemake.brand }}  </template>
        <template #content>
            <p>Цена: {{ carRemake.price }}</p>
            <p>Год выпуска: {{ carRemake.year }}</p>
            <p>Объем двигателя: {{ carRemake.volume }}</p>
            <p>Цвет: {{ carRemake.color }}</p>
        </template>
        <template #footer>
            <div class="chipes">
                <Chip v-if="Number(carRemake.price.slice(0, -1)) > 2300000" label="Дорогой автомобиль" icon="pi pi-bitcoin"/> 
                <Chip v-if="Number(carRemake.year) <= 2000" label="Старый" icon="pi pi-calendar-times"/>
                <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi "/> 
            </div>
        </template>
    </Card>
</template>

<style scoped>
    .car-image {
        width: 100%;
    }
    .chipes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .chipes p {
        margin: 5px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
    }

    h2 {
        margin: 0px;
        padding: 0px;
    }

    p {
        margin: 0px;
        padding: 0px;
    }
    .car-image {
        text-align: center;
        width: 100%;
        padding: 0px;
        transform: scale(0.95);
        border-radius: 20px;
        transition: 300ms;
    }

    .car-image:hover {
        transform: scale(1);
        transition: 300ms;
    }

    .car {
        border-radius: 20px;
        text-align: center;
    }

    .car > * {
        padding: 5px 0px;
        transition: 300ms;
    }

    .car > *:hover {
        background-color: gray;
        transition: 300ms;
    }

    .car >:last-child {
        border-radius: 0px 0px 20px 20px;
    }
</style>