<script setup>
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from "primevue/usetoast";
import { onMounted } from 'vue'
const toast = useToast();

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

onMounted(() => {
    showInfo();
})
</script>

<template>
    <Toast/>
</template>

<style scoped>

</style>