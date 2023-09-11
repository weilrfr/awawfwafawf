<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button";
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';

const checked = ref(false);
const visible = ref(false);
const value = ref(0);
</script>

<template>
    <div class="card flex justify-content-center side-bar">
        <Sidebar v-model:visible="visible">
            <div class="sidebar-content">
                <div class="card flex flex-wrap justify-content-center">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="value1" placeholder="Search" />
                    </span>
                </div>
                <div class="card flex justify-content-center">
                    <InputText type="text" v-model="value"/>
                </div>
                <div class="card flex justify-content-center">
                    <InputSwitch v-model="checked" />
                </div>
            </div>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<style scoped>
    .side-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
    }
    .side-bar button {
        height: 100%;

    }
    .sidebar-content > div {
        padding: 5px 0px;
    }
</style>