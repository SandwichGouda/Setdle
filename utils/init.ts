import seededShuffle from "seededshuffle"; // not import { shuffle } from "seededshuffle";

export type Card = {
    style: string;
    card: string;
};

export let allCards : string[] = [] ; 

for (let shape of ['l','o','z']) {
    for (let pattern of ['e','f','d']) {
        for (let color of ['g','p','r']) {
            for (let k = 1 ; k <= 3 ; k++) {
                allCards.push(shape+pattern+color+k)
            }
        }
    }
}

export function initMatrix<Card>(rows : number, cols : number, salt : number): Card[][] {
    let matrix: Card[][] = [];

    let deck_pick : string[] = structuredClone(allCards);

    let currentDate : string = (new Date()).toISOString().slice(0,10);
    
    deck_pick = seededShuffle.shuffle(deck_pick, salt+currentDate, true);

    let row: Card[] = [] ;
    for (let i = 0; i < rows; i++) {
        row = [];
        for (let j = 0 ; j < cols ; j++) {
            const c : Card = { style: "none", card: deck_pick[ i*cols + j] }
            row.push(c)
        }
        matrix.push(row);
    }
  
    return matrix;
}