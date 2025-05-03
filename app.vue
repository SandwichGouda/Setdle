<script setup lang="ts">

let numberSelected = ref(0);
let unselect = ref(false);

let rows = ref<number>(4);
let cols = ref<number>(4);



function initMatrix(): boolean[][] {
  let matrix: boolean[][] = [];

  for (let i = 0; i < rows.value; i++) {
    let row: boolean[] = new Array(cols.value).fill(false);
    matrix.push(row);
  }

  return matrix;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let selectedMatrix = ref<boolean[][]>(initMatrix());

async function toggle(i: number, j : number) {
  if (selectedMatrix.value[i][j]) {
    numberSelected.value--;
  } else {
    numberSelected.value++;
  }
  selectedMatrix.value[i][j] = !selectedMatrix.value[i][j]
  await sleep(500)
  if (numberSelected.value >= 3) {
    for (let ii = 0 ; ii < rows.value ; ii++) {
      for (let jj = 0 ; jj < rows.value ; jj++) {
        selectedMatrix.value[ii][jj] = false
      }
      numberSelected.value = 0
    }
  }
}

</script>

<template>

  <title>Setdle</title>
  <div>

    <!-- {{ selectedMatrix }}

    {{ numberSelected }} -->

    <table class="table">
      <thead>
      </thead>
      <tbody>
      <tr v-for="(row,i) in selectedMatrix">
        <td v-for="(bool,j) in row">
          <Card :selected=bool @click="toggle(i,j)"></Card>
          <!-- {{  bool  }} -->
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