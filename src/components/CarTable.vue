<script setup>
import { defineProps, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';

defineProps({
    cars: {
        type: Array,
        required: true,
    },
});

const carColumns = [
    {
        field: 'brand',
        header: 'Марка',
    },
    {
        field: 'price',
        header: 'Цена',
    },
    {
        field: 'year',
        header: 'Год выпуска',
    },
    {
        field: 'volume',
        header: 'Объем двигателя',
    },
    {
        field: 'color',
        header: 'Цвет',
    },
    {
        field: 'criticStore',
        header: 'Оценка критика'
    }
]

const numberMarks = [
  {
  mark: 0,
  header: "Это Део Нексия"
 },
 {
  mark: 1,
  header: "Очень плохо"
 },
  {
    mark: 2,
    header: "Плохо"
  },
  {
    mark: 3,
    header: "Нормально"
  },
  {
    mark: 4,
    header: "Хорошо"
  },
  {
    mark: 5,
    header: "Отлично"
  },
  {
    mark: 6,
    header: "Это Бентли"
  },
]

const criticalNumber = ref();
</script>

<template>
    <DataTable :value="cars">
        <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
            <template #body="{ data }">
                <template v-if="column.field === 'criticStore'">
                    <Dropdown v-model="criticalNumber" :options="numberMarks" optionLabel="header" class="dropdown"/>
                </template>
                <template v-else> {{ data[column.field] }} </template>
            </template>
        </Column>
    </DataTable>
</template>

<style scoped>

</style>