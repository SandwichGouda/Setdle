import SeededShuffle from "seededshuffle"; // not import { shuffle } from "seededshuffle";

export type Card = {
    selected: boolean;
    card: string;
};

export const allCards : string[] = [] ; 

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

    let currentDate : string = (new Date()).toISOString().slice(0,10);

    let shuffled_matrix : string[] = SeededShuffle.shuffle(allCards, currentDate+salt, true);
  
    for (let i = 0; i < rows; i++) {
        let row: Card[] = [] ;
        for (let j = 0 ; j < cols ; j++) {
            const c : Card = { selected: false, card: shuffled_matrix[ i*rows + j] }
            row.push(c)
        }
        matrix.push(row);
    }
  
    return matrix;
}