<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);

const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Name - Surname is required.';
    }

    return true;
}

const visible = ref(false);
const value1 = ref(null);

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});

</script>

<template>
    <div class="card flex justify-content-center side-bar">
        <form>
            <Sidebar v-model:visible="visible" @mouseleave="visible = false">
                <form @submit="onSubmit" class="flex flex-column gap-2">
                    <div class="sidebar-content">
                        <div class="card flex flex-wrap justify-content-center">
                            <div class="p-input-icon-left p-float-label" :style="`width: 100%`">
                                <i class="pi pi-search" />
                                <InputText v-model="value1" placeholder="Введите запрос" :class="{ 'p-invalid': errorMessage }" :style="`width: 100%`"/>
                                <label for="value1">Поиск</label>
                            </div>
                        </div>
                        <span class="p-float-label" :style="`margin-bottom: 20px`">
                            <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" :style="`width: 100%; margin-bottom:`"/>
                            <label for="value">Задайте нам вопрос</label>
                        </span>
                        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
                        <Button type="submit" label="Submit" :style="`width: 100%`"/>
                    </div>
                </form>
            </Sidebar>
        </form>
        <Button icon="pi pi-arrow-right" @mouseenter="visible = true"/>
    </div>
</template>

<style scoped>
    .side-bar {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
    }
    .side-bar button {
        height: 100%;

    }
    .sidebar-content > div {
        padding: 20px 0px;
    }
</style>