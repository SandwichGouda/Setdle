<script setup lang="ts">

let numberSelected = ref<number>(0);
let unselect = ref<boolean>(false);

let numberPlays = ref<number>(0);
let rows = ref<number>(3);
let cols = ref<number>(4);

/* Note : some of these refs don't have to be ... */

let matrix = ref<Card[][]>(initMatrix(rows.value, cols.value, numberPlays.value));

let numberOfSets = ref<number>(getNumberOfSets(matrix.value));

let setsFound : string[][] = [];

async function toggle(i: number, j : number) {
  if (matrix.value[i][j].selected) {
    numberSelected.value--;
  } else {
    numberSelected.value++;
  }
  matrix.value[i][j].selected = !matrix.value[i][j].selected;
  await sleep(100);
  if (numberSelected.value >= 3) {
    numberSelected.value = 0;
    const selectedCards : string[] = [];
    for (let ii = 0 ; ii < rows.value ; ii++) {
      for (let jj = 0 ; jj < rows.value ; jj++) {
        if (matrix.value[ii][jj].selected) {
          selectedCards.push(matrix.value[ii][jj].card);
        }
        matrix.value[ii][jj].selected = false;
      }
    }
    // console.log(selectedCards);
    if (isASet(selectedCards[0],selectedCards[1],selectedCards[2])) {
      if (!setsFound.includes(selectedCards)) {
        setsFound.push(selectedCards)
      } 
    }
  }
}

</script>

<template>

  <title>Setdle</title>  

  <div>

    {{ matrix }}

    {{ numberSelected }}

    {{ numberOfSets }}

    {{ setsFound }}

    <table class="table">
      <thead>
      </thead>
      <tbody>
      <tr v-for="(row,i) in matrix">
        <td v-for="(card,j) in row">
          <Card @click="toggle(i,j)" :selected="card.selected" :card="card.card"></Card>
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