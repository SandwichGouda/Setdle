import type { Card } from "./init"

export function isASet(card1 : string, card2 : string, card3 : string) : boolean {
    const shape : boolean = (card1[0] === card2[0] && card2[0] === card3[0]) || (card1[0] !== card2[0] && card2[0] !== card3[0] && card1[0] !== card3[0])
    const pattern : boolean = (card1[1] === card2[1] && card2[1] === card3[1]) || (card1[1] !== card2[1] && card2[1] !== card3[1] && card1[1] !== card3[1])
    const color : boolean = (card1[2] === card2[2] && card2[2] === card3[2])|| (card1[2] !== card2[2] && card2[2] !== card3[2] && card1[2] !== card3[2])
    const number : boolean = (card1[3] === card2[3] && card2[3] === card3[3])|| (card1[3] !== card2[3] && card2[3] !== card3[3] && card1[3] !== card3[3])
    return shape && pattern && color && number
}

function getCardsList(matrix : Card[][]) : string[] {
    const rows : number = matrix.length ;
    const cols : number = matrix[0].length ;
    const cardsList : string[] = new Array<string>()
    
    for (let i = 0 ; i < rows ; i++) {
        for (let j = 0 ; j < cols ; j++) {
            cardsList.push(matrix[i][j].card)
        }
    }
    return cardsList
}

export function getNumberOfSets(matrix : Card[][]) : number {
    let n : number = 0 ; 
    const cardsList : string[] = getCardsList(matrix) ;
    const numberOfCards = cardsList.length ;

    for (let i = 0 ; i < numberOfCards ; i++) {
        for (let j = i+1 ; j < numberOfCards ; j++) {
            for (let k = j+1 ; k < numberOfCards ; k++) {
                if (i !== j && j !== k && i !== k) {
                    if (isASet(cardsList[i], cardsList[j], cardsList[k])) {
                        console.log(i,j,k);
                        n++;
                    }
                }
            }
        }
    }

    return n
}