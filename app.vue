<script setup lang="ts">

let numberSelected = ref<number>(0);
let unselect = ref<boolean>(false);

let numberPlays = ref<number>(0);
let rows = ref<number>(4);
let cols = ref<number>(4);

/* Note : some of these refs don't have to be ... */

let matrix = ref<Card[][]>(initMatrix(rows.value, cols.value, numberPlays.value));

let numberOfSets = ref<number>(getNumberOfSets(matrix.value));

let setsFound : number[][][] = [];

async function click(i: number, j : number) : Promise<void> {
  if (matrix.value[i][j].style === "yellow" || matrix.value[i][j].style === "none") {
    if (matrix.value[i][j].style === "yellow") {
      numberSelected.value--;
      matrix.value[i][j].style = "none";
    } else {
      numberSelected.value++;
      matrix.value[i][j].style = "yellow";
    }
    if (numberSelected.value >= 3) {
      numberSelected.value = 0;
      let selectedCards : number[][] = [];
      for (let ii = 0 ; ii < rows.value ; ii++) {
        for (let jj = 0 ; jj < cols.value ; jj++) {
          if (matrix.value[ii][jj].style === "yellow") {
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
  

  <header>
    <img src="assets/logo.svg" draggable="false"/>
  </header>

    <!-- {{ matrix }} -->

    <!-- {{ numberSelected }}

    {{ numberOfSets }} -->

    <!-- {{ setsFound }}  -->
  <div class="main-div">
    <div class="left-div">
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
    </div>
  
    
    <div class="right-div">
      <div class="subdiv-up" v-if="setsFound.length < numberOfSets">
          You have found {{ setsFound.length }} sets. <br> <br>
       
          Keep looking, there's more to find !
      </div>
      <div class="subdiv-up" v-if="setsFound.length === numberOfSets">
        
        Congratulations, you found all sets !
        
      </div>
      <div class="subdiv-down">

        <button class="replay-button" id="replay-button"> Play again </button>
        
      </div>

    </div>
  </div>
</template>

<style>

html {
  background-color: rgb(29, 2, 36);
}

body {
  margin: 0;
  padding: 0;
  /* background-color: rgb(29, 2, 36); */
}

header {
  background-color: rgb(45, 3, 56);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  margin-bottom: 3vh;
}

header img {
  height: 70%;
}

.main-div {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: green; */
  width: 100%;
}

.left-div {
  color: white;
  /* background-color: orange; */
  width: 70%;
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center;     /* vertical centering */

}

.right-div {
  color: white;
  width: 30%;
  /* background-color: brown; */
  display: grid;
  justify-content: center; /* horizontal centering */
  align-items: center;     /* vertical centering */
}

.subdiv-up {
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center;     /* vertical centering */
  /* background-color: blue; */
  text-align: center;
  font-size: 15pt;
  font-family: Outfit,Avenir,Helvetica,Arial,sans-serif;
}

.subdiv-down {
  /* background-color: purple; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* table {
  display: flex;
  justify-content: center;
  align-items: center;
} */

td {
  padding: 0.5vw;
}

button {
  font-size: 15pt;
  font-family: Outfit,Avenir,Helvetica,Arial,sans-serif;
  padding: 10pt;
  border: none;
  border-radius: 5pt;
}

.replay-button {
    background: linear-gradient(135deg, 
        hsl(var(--hue-1, 200), 100%, 60%), 
        hsl(var(--hue-2, 260), 100%, 60%)
    );
    transition: all 0.3s ease;
    box-shadow: 
        0 10px 20px -10px hsla(var(--hue-1, 200), 100%, 40%, 0.5),
        0 0 0 2px hsla(var(--hue-1, 200), 100%, 80%, 0.3);
    overflow: hidden;
    --hue-1: 200;
    --hue-2: 260;
}

.replay-button:hover {
    --hue-1: 230;
    --hue-2: 290;
    transform: scale(1.05);
}

.replay-button:active {
    --hue-1: 260;
    --hue-2: 320;
    transform: scale(0.95);
}

/* 
.replay-button::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, white, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
} */
</style>