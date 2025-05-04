export type Card = {
    selected: boolean;
    card: string;
};

export const allCards = new Array<string>() ;

for (let shape of ['l','o','z']) {
    for (let pattern of ['e','f','d']) {
        for (let color of ['g','p','e']) {
            for (let k = 1 ; k <= 3 ; k++) {
                allCards.push(shape+pattern+color+k)
            }
        }
    }
}

console.log(allCards)


export function initMatrix<Card>(rows : number, cols : number, salt : number): Card[][] {
    let matrix: Card[][] = [];
  
    for (let i = 0; i < rows; i++) {
        let row: Card[] = new Array<Card>()
        for (let j = 0 ; j < cols ; j++) {
            const c : Card = { selected: false, card: "zdr"+((i+j)%3 + 1) }
            row.push(c)
        }
        matrix.push(row);
    }
  
    return matrix;
}