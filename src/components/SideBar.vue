<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button";
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';

const checked = ref(false);
const visible = ref(false);
const value = ref(0);
console.log(value);
console.log(visible);
</script>

<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <div class="card flex justify-content-center">
                <InputSwitch v-model="checked" />
            </div>
            <div class="card flex justify-content-center">
                <InputText type="text" v-model="value" disabled />
                <Knob v-model="value" />
            </div>
            <!-- <div class="card flex justify-content-center">

            </div> -->
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<style scoped>

</style>