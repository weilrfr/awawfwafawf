<script setup>
import { defineProps, ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import { useAuto } from "../composable/useAuto";
import Checkbox from 'primevue/checkbox';
import ColorPicker from "primevue/colorpicker";

const { autoListRemake, getAutoList, loading } = useAuto();

onMounted(() => {
    getAutoList();
})

const carColumns = [
  { field: 'brand', header: 'Бренд' },
  { field: 'model', header: 'Модель' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год' },
  { field: 'age', header: 'Возраст' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]

</script>

<template>
    <DataTable :value="autoListRemake" :loading="loading.autoList" class="car-table">
        <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
          <template #body="slotProps">
            <span v-if="column.field === 'saled'">
              <Checkbox v-model="slotProps.data.saled" binary checked readonly />
            </span>
            <span v-else-if="column.field === 'color'">
              <ColorPicker v-model="slotProps.data.color" disabled />
            </span>
            <span v-else>{{ slotProps.data[column.field] }}</span>
          </template>
        </Column>
      </DataTable>
</template>

<style scoped>
:deep(.p-disabled) {
    opacity: 1;
}

  .car-table {
    margin: 20px 0px;
  }

</style>