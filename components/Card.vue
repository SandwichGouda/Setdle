<script setup lang="ts">

let props = defineProps(['style', 'card']);

const getImage = (name : string) => {
  return new URL(`/assets/cards/${name}`, import.meta.url).href;
}

</script>

<template>

<div :class="props.style" id="card">

  <img :src="getImage(props.card+'.svg')" draggable="false"/>

</div>

</template>


<style scoped>

div {
  width: 28vh;
  height: 17vh;
  background-color: #000000;
  border-radius: 15px; 
  border: 2px double gray;

  object-fit: contain;
  align-items: center;   /* Vertical centering */
  justify-content: center;
  display: flex;
}

.red {
  box-shadow: 0 0 8px 6px rgb(255, 44, 44, 0.6);
  border: 2px double #ff6262;
}

.yellow {
  box-shadow: 0 0 8px 6px rgb(255, 255, 44, 0.6);
  border: 2px double rgb(255, 255, 0);
}

.green {
  box-shadow: 0 0 8px 6px rgb(44, 255, 44, 0.6);
  border: 2px double rgb(78, 241, 78);
}

img {
  width: 100%;
  
  user-select: none;           /* Modern browsers */
  -webkit-user-select: none;   /* Chrome/Safari */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* IE/Edge */
}

#card {
  transition: all 0.1s ease;
}

#card:hover {
  transform: scale(1.01);
  box-shadow: 0 0 4px 2px white;
}


</style>