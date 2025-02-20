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

function knightMoves(startNode, endNode) {
  const adjacencyList = generateAdjacencyList()
  const queue = [[startNode, [startNode]]]
  const visited = new Set()

  while (queue.length > 0) {
    const [currNode, currPath] = queue.shift()
    if (eq(currNode, endNode)) return currPath
    if (visited.has(currNode)) continue
    visited.add(currNode)

    const neighbors = adjacencyList[currNode]
    neighbors.forEach((neighbor) => {
      const newPath = [...currPath, neighbor]
      queue.push([neighbor, newPath])
    })
  }
  return null
}

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
  return [row, col]
  // return row * size + col
}

function eq(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

console.log(knightMoves([0, 0], [7, 7]))
