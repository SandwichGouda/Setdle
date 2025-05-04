<script setup lang="ts">

let props = defineProps(['selected', 'card']);

const a : string = "zdp3" ;

</script>

<template>

<div :class="{ selected: props.selected }">

  <img src="~/assets/cards/zdp3.svg" draggable="false"/>

</div>

</template>


<style scoped>

div {
  width: 28vh;
  height: 20vh; /* = 16 * 0.714, following the standard ratio for playing cards */
  background-color: #F0F0F0;
  border-radius: 15px; 
  border: 2px double gray;

  object-fit: contain;
  align-items: center;   /* Vertical centering */
  justify-content: center;
  display: flex;
}

.selected {
  box-shadow: 0 0 5px 4px rgb(255, 44, 44, 0.3);
  border: 2px double rgb(255, 44, 44);
}

img {
  width: 100%;
  
  user-select: none;           /* Modern browsers */
  -webkit-user-select: none;   /* Chrome/Safari */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* IE/Edge */
}


</style>