<script setup>
    import { ref } from 'vue';
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Dropdown from 'primevue/dropdown';
    import InputNumber from 'primevue/inputnumber';
    import Calendar from 'primevue/calendar';
    import ColorPicker from 'primevue/colorpicker'
    import Knob from 'primevue/knob';

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

    const car = ref({
        brand: '',
        price: '',
        year: '',
        volume: '',
        color: '',
        saled: '',
        city: '',
        carcase: '',
        gear: '',
        travel: '',
        })
</script>

<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />
        <Dialog v-model:visible="visible" modal header="Добавить автомобиль" :style="{ width: '50vw' }">
            <template #default>
                <div class="p-fluid">
                    <div class="p-field">
                        <span class="p-float-label">
                            <Dropdown id="brand" v-model="car.brand" editable :options="brandLabel" option-label="brand" option-value="brand" />
                            <label for="brand">Бренд</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="car.price" inputId="currency-us" mode="currency" currency="KZT" locale="ru-ru"/>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <Calendar id="year" v-model="car.year" view="year"/>
                            <label for="username">Год</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <!-- <span class="p-float-label">
                            <InputText id="username" v-model="value">
                            </InputText>
                            <label for="username">Объем</label>
                        </span> -->
                        <Knob v-model="car.volume" :size="100" :max="10"/>
                        <div class="flex gap-2">
                            <Button icon="pi pi-plus" @click="car.volume++" :disabled="car.volume >= 10" />
                            <Button icon="pi pi-minus" @click="car.volume--" :disabled="car.volume <= 0" />
                        </div>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <ColorPicker v-model="car.color" id="color"/>
                            <label for="color">Цвет</label>
                        </span>
                    </div>

                    <span class="p-float-label">
                        <InputText id="saled" v-model="car.saled" />
                        <label for="saled">Продано</label>
                    </span>
                    <div class="p-field">
                        <span class="p-float-label">
                            <Dropdown id="city" v-model="car.city" editable :options="cities" option-label="city" option-value="city" />
                            <label for="city">Город</label>
                        </span>
                    </div>
                    <span class="p-float-label">
                        <InputText id="carcase" v-model="car.carcase" />
                        <label for="carcase">Кузов</label>
                    </span>
                    <span class="p-float-label">
                        <InputText id="gear" v-model="car.gear" />
                        <label for="gear">Коробка</label>
                    </span>
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="travel" v-model="car.travel" />
                            <label for="travel">Пробег</label>
                        </span>
                    </div>
                </div>
           </template>
            <template #footer>
                <Button label="Сбросить" icon="pi pi-times" @click="toggleVisible" text />
                <Button label="Добавить" icon="pi pi-check" @click="toggleVisible" autofocus />
            </template>
        </Dialog>
</template>

<style scoped>
.p-float-label {
    margin: 25px 0px;
}
</style>