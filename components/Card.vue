<script setup lang="ts">

let props = defineProps(['selected']);

</script>

<template>

<div :class="{ selected: props.selected }"></div>

</template>


<style scoped>

div {
  width: 28vh;
  height: 20vh; /* = 16 * 0.714, following the standard ratio for playing cards */
  background-color: #F0F0F0;
  border-radius: 15px; 
  border: 2px double gray;
}

.selected{
  box-shadow: 0 0 5px 4px rgb(255, 44, 44, 0.3);
  border: 2px double rgb(255, 44, 44);
}


</style>