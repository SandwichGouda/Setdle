<script setup lang="ts">
import { routerViewLocationKey } from 'vue-router';


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

let selectedMatrix = ref<boolean[][]>(initMatrix());

function toggle(i: number, j : number): void {
  numberSelected.value++;
  if (numberSelected.value >= 3) {
    for (let ii = 0 ; ii < rows.value ; ii++) {
      for (let jj = 0 ; jj < rows.value ; jj++) {
        selectedMatrix.value[ii][jj] = false
      }
    }
  } else {
    selectedMatrix.value[i][j] = !selectedMatrix.value[i][j]
  }
}

</script>

<template>

  <title>Setdle</title>
  <div>

    <h1>{{ unselect }}</h1>

    <table class="table">
      <thead>
      </thead>
      <tbody>
      <tr v-for="i in { rows }">
        <td v-for="j in { cols }">
          <Card selected="{{ selectedMatrix[i][j] }}" @click="toggle(i,j)"></Card>
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