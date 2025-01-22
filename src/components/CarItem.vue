<script setup>
import Card from 'primevue/card'
import Chip from 'primevue/chip';
import { defineProps } from 'vue';
import ColorPicker from "primevue/colorpicker";
    
const props = defineProps({
    auto: {
        type: Object,
        required: true,
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
    <Card class="car">
        <template #header>
            <img alt="car" class="car-image" :src="auto.image"/>
        </template>
        <template #title> {{ auto.brand }} {{ auto.model }}  </template>
        <template #content>
            <p>Цена: {{ auto.price }}</p>
            <p>Кузов: {{ auto.carcase }}</p>
            <p>Город: {{ auto.city }}</p>
            <p>Год выпуска: {{ auto.year }}</p>
            <p>Объем двигателя: {{ auto.volume }}</p>
            <p>Пробег: {{ auto.travel }}</p>
            <p>Цвет: <ColorPicker v-model="auto.color" disabled></ColorPicker></p>
        </template>
        <!-- <template #footer>
            <div class="chipes">
                <Chip v-if="Number(auto.price.slice(0, -1)) > 2300000" label="Дорогой автомобиль" icon="pi pi-bitcoin"/> 
                <Chip v-if="Number(auto.year) <= 2000" label="Старый" icon="pi pi-calendar-times"/>
                <Chip v-if="changeColor(auto.color)" label="Конченный цвет" icon="pi "/> 
            </div>
        </template> -->
    </Card>
</template>

<style scoped>
    .car >:first-child {
        height: 200px;
        flex-basis: 100%;
    }
    .car-image {
        width: 100%; 
        height: 100%;
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
        padding: 5px 0px;
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
        border: 1px solid black;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
        text-align: center;
        transition: 300ms;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .car:hover {
        transform: translateY(-15px);
        transition: 300ms;
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
