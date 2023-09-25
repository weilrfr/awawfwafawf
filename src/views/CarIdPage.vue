<script setup>
import { useAuto } from "../composable/useAuto";
import { onMounted } from "vue";
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import ColorPicker from "primevue/colorpicker";

const { auto, getAuto } = useAuto();
const route = useRoute();

onMounted(async() => {

    await getAuto(route.params.id);

})

const checked = ref(false)

const toggleChecked = () => {
    checked.value = !checked.value
}

</script>

<template>
    <div class="car-info" v-if="auto">
        <div class="img">
            <img alt="car" class="car-img" :src="auto.image"/>
        </div>
        <div class="info">
                <div class="header">
                    <p>{{ auto.brand }}</p>
                    <i v-if="!checked" class="pi pi-heart heart" @click="toggleChecked"></i>
                    <i v-else class="pi pi-heart-fill fill-heart" style="color: red" @click="toggleChecked"></i>
                </div>
                <Divider />
                <p>Цена: {{ auto.price }}</p>
                <Divider />
                <p>Объем: {{ auto.volume }}</p>
                <Divider />
                <p>Кузов: {{ auto.carcase }}</p>
                <Divider />
                <p>Город: {{ auto.city }}</p>
                <Divider />
                <p>Объем двигателя: {{ auto.volume }}</p>
                <Divider />
                <p>Цвет: <ColorPicker v-model="auto.color" disabled></ColorPicker></p>
                <Button class="buy-btn" label="Купить"/>
        </div>
    </div>
</template>

<style scoped>
    .buy-btn{
        width: 100%;
        margin-top: 20px;
    }
    .fill-heart {
        animation: heart-fill 600ms;
    }
    .heart {
        animation: heart 500ms;
    }
    @keyframes heart-fill{
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes heart {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.5);
        }
        100% {
            transform: scale(1);
        }
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
    .header i {
        font-size: 30px;
    }
    .car-info {
        display: flex;
        justify-content: center;
    }
    .car-img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
    .img {
        flex-basis: 50%;
        height: 453px;
        margin-right: 20px;
    }
</style>