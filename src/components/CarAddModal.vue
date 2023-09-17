<script setup>
    import { ref } from 'vue';
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Dropdown from 'primevue/dropdown';
    import InputNumber from 'primevue/inputnumber';
    import Calendar from 'primevue/calendar';
    import ColorPicker from 'primevue/colorpicker'
    import { useAuto } from '@/composable/useAuto';
    import FileUpload from 'primevue/fileupload';
    
    const { newAuto, createAuto, loading, clear } = useAuto();

    const visible = ref(false);

    const toggleVisible = () => {
        visible.value = !visible.value;
    }

    const cities = [
        {city: 'Almaty'},
        {city: 'Astana'},
        {city: 'Semey'},
        {city: 'Almaty'},
        {city: 'Almaty'},
        {city: 'Almaty'},
        {city: 'Almaty'},
    ]      

    const brandLabel = [
        { brand: 'BMW' },
        { brand: 'Audi' },
        { brand: 'Mercedes' },
        { brand: 'Volkswagen' },
        { brand: 'Volvo' },
        { brand: 'Toyota' },
        { brand: 'Nissan' },
        { brand: 'Mazda' },
        { brand: 'Honda' },
        { brand: 'Hyundai' },
        { brand: 'Kia' },
        { brand: 'Lexus' },
        { brand: 'Ford' },
        { brand: 'Chevrolet' },
        { brand: 'Skoda' },
        { brand: 'Renault' },
        { brand: 'Peugeot' },
    ]


    const addAuto = async () => {
        await createAuto();
        toggleVisible();
    }
    
    const clearAuto = () => {
        clear();
        toggleVisible();
    }
</script>

<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />
        <Dialog v-model:visible="visible" modal header="Добавить автомобиль" :style="{ width: '30%' }">
            <template #default>
                <div class="p-fluid">
                    <div class="p-field">
                        <span class="p-float-label">
                            <Dropdown id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand" option-value="brand"/>
                            <label for="brand">Бренд</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="newAuto.price" inputId="currency-us" mode="currency" currency="KZT" locale="ru-ru"/>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <Calendar id="year" v-model="newAuto.year" view="year"/>
                            <label for="username">Год</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="volume" v-model="newAuto.volume">
                            </InputText>
                            <label for="volme">Объем</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <ColorPicker v-model="newAuto.color" id="color" :style="`width: 100%;`"/>
                            <label for="color">Цвет</label>
                        </span>
                    </div>
                    <span class="p-float-label">
                        <InputText id="saled" v-model="newAuto.saled" />
                        <label for="saled">Продано</label>
                    </span>
                    <div class="p-field">
                        <span class="p-float-label">
                            <Dropdown id="city" v-model="newAuto.city" editable :options="cities" option-label="city" option-value="city" />
                            <label for="city">Город</label>
                        </span>
                    </div>
                    <span class="p-float-label">
                        <InputText id="carcase" v-model="newAuto.carcase" />
                        <label for="carcase">Кузов</label>
                    </span>
                    <span class="p-float-label">
                        <InputText id="gear" v-model="newAuto.gear" />
                        <label for="gear">Коробка</label>
                    </span>
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="travel" v-model="newAuto.travel" />
                            <label for="travel">Пробег</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <label for="photo">Картинки</label>
                        <FileUpload id="photo" v-model="newAuto.image" mode="basic" accept="image/*" maxFileSize="10000000" @upload="onUpload"/>
                    </div>
                </div>
           </template>
            <template #footer>
                <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text/>
                <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
            </template>
        </Dialog>
</template>

<style scoped>
.p-float-label {
    margin: 25px 0px;
}
</style>