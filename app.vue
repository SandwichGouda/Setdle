<script setup lang="ts">

let numberSelected = ref(0);
let unselect = ref(false);

let numberPlays = ref(0);

let rows = ref<number>(4);
let cols = ref<number>(4);

/* Note : some of these refs don't have to be ... */

let matrix = ref<Card[][]>(initMatrix(rows.value, cols.value, numberPlays.value));

async function toggle(i: number, j : number) {
  if (matrix.value[i][j].selected) {
    numberSelected.value--;
  } else {
    numberSelected.value++;
  }
  matrix.value[i][j].selected = !matrix.value[i][j].selected
  await sleep(500)
  if (numberSelected.value >= 3) {
    for (let ii = 0 ; ii < rows.value ; ii++) {
      for (let jj = 0 ; jj < rows.value ; jj++) {
        matrix.value[ii][jj].selected = false
      }
      numberSelected.value = 0
    }
  }
}

const currentDate = new Date();

// console.log(currentDate.toISOString().slice(0,10));


</script>

<template>

  <title>Setdle</title>  

  <div>

    <!-- {{ matrix }} -->

    <!-- {{ numberSelected }} -->

    <table class="table">
      <thead>
      </thead>
      <tbody>
      <tr v-for="(row,i) in matrix">
        <td v-for="(card,j) in row">
          <Card @click="toggle(i,j)" :selected="card.selected" :card="matrix[i][j].card"></Card>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- <NuxtPage /> -->
  </div>
</template>

<style scoped>

body, html, table {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

table {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

td {
  padding : 0.5vw;
}

</style>