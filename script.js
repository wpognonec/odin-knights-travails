const size = 8
const positions = [...Array(size).keys()]
const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
]

function knightMoves(p1, p2) {}

function generateAdjacencyList() {
  const adjacencyList = {}
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const index = getIndex(row, col)
      adjacencyList[index] = []
      moves.forEach(([rOffset, cOffset]) => {
        const newRow = row + rOffset
        const newCol = col + cOffset
        const newIndex = getIndex(newRow, newCol)
        if (newIndex) adjacencyList[index].push(newIndex)
      })
    }
  }
  return adjacencyList
}

function getIndex(row, col) {
  if (!positions.includes(row) || !positions.includes(col)) return null
  return row * size + col
}

console.log(generateAdjacencyList())
