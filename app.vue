<script setup lang="ts">

let numberSelected = ref<number>(0);
let unselect = ref<boolean>(false);

let numberPlays = ref<number>(0);
let rows = ref<number>(4);
let cols = ref<number>(4);

/* Note : some of these refs don't have to be ... */

let matrix = ref<Card[][]>(initMatrix(rows.value, cols.value, numberPlays.value));

let numberOfSets = ref<number>(getNumberOfSets(matrix.value));

let setsFound : string[][] = [];

async function click(i: number, j : number) : void {
  if (matrix.value[i][j].style === "blue" || matrix.value[i][j].style === "none") {
    if (matrix.value[i][j].style === "blue") {
      numberSelected.value--;
      matrix.value[i][j].style = "none";
    } else {
      numberSelected.value++;
      matrix.value[i][j].style = "blue";
    }
    if (numberSelected.value >= 3) {
      numberSelected.value = 0;
      let selectedCards : number[][] = [];
      for (let ii = 0 ; ii < rows.value ; ii++) {
        for (let jj = 0 ; jj < cols.value ; jj++) {
          if (matrix.value[ii][jj].style === "blue") {
            selectedCards.push([ii, jj]);
          }
        }
      }
      if (isASet(matrix.value[selectedCards[0][0]][selectedCards[0][1]].card,matrix.value[selectedCards[1][0]][selectedCards[1][1]].card,matrix.value[selectedCards[2][0]][selectedCards[2][1]].card)) {
        if (!setsFound.some(set => set.every((card, i) => card.every((coord,j) => coord === selectedCards[i][j])))) {
          setsFound.push(selectedCards)
        }
        matrix.value[selectedCards[0][0]][selectedCards[0][1]].style = "green"
        matrix.value[selectedCards[1][0]][selectedCards[1][1]].style = "green"
        matrix.value[selectedCards[2][0]][selectedCards[2][1]].style = "green"
      } else {
        matrix.value[selectedCards[0][0]][selectedCards[0][1]].style = "red"
        matrix.value[selectedCards[1][0]][selectedCards[1][1]].style = "red"
        matrix.value[selectedCards[2][0]][selectedCards[2][1]].style = "red"
      }
      await sleep(300);
      matrix.value[selectedCards[0][0]][selectedCards[0][1]].style = "none"
      matrix.value[selectedCards[1][0]][selectedCards[1][1]].style = "none"
      matrix.value[selectedCards[2][0]][selectedCards[2][1]].style = "none"
    }
  }
}

</script>

<template>

  <title>Setdle</title>  

  <div>

    <!-- {{ matrix }} -->

    <!-- {{ numberSelected }}

    {{ numberOfSets }} -->

    <!-- {{ setsFound }}  -->

    <table class="table">
      <thead>
      </thead>
      <tbody>
      <tr v-for="(row,i) in matrix">
        <td v-for="(card,j) in row">
          <Card @click="click(i,j)" :style="card.style" :card="card.card"></Card>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- <NuxtPage /> -->
  </div>
</template>

<style>

html {
  background-color: rgb(29, 2, 36); /* Light blue */
}

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