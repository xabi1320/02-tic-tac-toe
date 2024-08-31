import { WINNER_COMBOS } from "../constants.js"
// null es que no hay ganador, false es que hay un empate
export const checkWinner = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
}