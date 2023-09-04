<script setup>
    import {ref} from 'vue'
    let counter = ref(0)

    let increase = () => {
        counter.value++;
    }

    let decrease = () => {
        counter.value--;
    }
</script>


<template>
    <div class="buttons">
        {{ counter }}
        <button class="increase" @click="increase">Увеличить</button>
        <button class="decrease" @click="decrease">Уменьшить</button>
    </div>
</template>


<style scoped>
    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }
    .increase{
        background-color: green;
    }
    .decrease {
        background-color: red;
    }
</style>
