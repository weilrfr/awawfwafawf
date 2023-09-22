<script setup>
import Card from 'primevue/card'
import FieldSet from 'primevue/fieldset';
import TextArea from 'primevue/textarea';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
    <FieldSet>
        <template #legend>
            <div class="flex align-items-center text-primary">
                <span class="pi pi-user mr-2"></span>
                <span class="font-bold text-lg">TOO "Бояркин Игорь"</span>
            </div>
        </template>
        <div class="info">
            <ul class="contacts">
                <li>Новые автомобили : +7 727 225 64 24</li>
                <li>Автомобили с пробегом: +7 727 225 64 22</li>
                <li>Сервис и запасные части: +7 727 225 64 24</li>
                <li>Мобильный номер 8 702 075 06 40</li>
                <li>Call Center *звонок бесплатный 8 800 080 64 24</li>
                <li>info@mercedes-benz.com.kz</li>
            </ul>
            <div class="time">
                <h2>Часы работы</h2>
                <ul>
                    <li>Понедельник</li>
                    <li>Вторник</li>
                    <li>Среда</li>
                    <li>Четверг</li>
                    <li>Пятница</li>
                    <li>Суббота</li>
                    <li>Воскресенье</li>
                </ul>
                <ul>
                    <li>9:00 - 19:00</li>
                    <li>9:00 - 19:00</li>
                    <li>9:00 - 19:00</li>
                    <li>9:00 - 19:00</li>
                    <li>9:00 - 19:00</li>
                    <li>10:00 - 16:00</li>
                    <li>Выходной</li>
                </ul>
            </div>
            <div class="textarea">
                <span class="p-float-label">
                    <TextArea v-model="value" autoResize rows="10" cols="60" @input="console.log(value)"/>
                    <label>Напишите нам</label>
                </span>
            </div>
        </div>
    </FieldSet>


    <div></div>
</template>

<style scoped>
    .info {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
    }
    .info ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .time {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .time h2 {
        flex-basis: 100%;
    }
    .contacts li{
        padding: 7px 0px;
    }
    .time ul li {
        padding: 5px 0px;
    }
</style>