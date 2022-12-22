const shortHike = {
  start: {x:0,y:0},
  end: {x:0,y:0},
  manhattanDist: 0,
  openNodes: [],
  closedNodes: [],
  paths: []
}

const manhattanHeuristic = (pos1,pos2) => {
  if (typeof pos1 == 'object') {
    return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y)
  } else {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1])
  }
}

const input = (
`abaaaaaccccccccccccccccccaaaaaaaaaaaaaccccaaaaaaaccccccccccccccccccccccccccccaaaaaa
abaaaaaaccaaaacccccccccccaaaaaaaaacaaaacaaaaaaaaaacccccccccccccccccccccccccccaaaaaa
abaaaaaacaaaaaccccccccccaaaaaaaaaaaaaaacaaaaaaaaaacccccccccccccaacccccccccccccaaaaa
abaaaaaacaaaaaacccccccccaaaaaaaaaaaaaaccaaacaaaccccccccccccccccaacccccccccccccccaaa
abccaaaccaaaaaacccaaaaccaaaaaaaaaaaaaccccaacaaacccccccccaacaccccacccccccccccccccaaa
abcccccccaaaaaccccaaaacccccaaaaacccaaaccaaaaaaccccccccccaaaaccccccccccccccccccccaac
abcccccccccaaaccccaaaacccccaaaaacccccccccaaaaaccccccccccklllllccccccccccccccccccccc
abcccccccccccccccccaaccccccccaaccccccccaaaaaaaccccccccckklllllllcccccddccccaacccccc
abaccccccccccccccccccccccccccaaccccccccaaaaaaaaccccccckkkklslllllcccddddddaaacccccc
abacccccccccccccccccccccccccccccccaaaccaaaaaaaaccccccckkkssssslllllcddddddddacccccc
abaccccccccccccccccccccccccccccccccaaaaccaaacaccccccckkksssssssslllmmmmmdddddaacccc
abcccccccccccccccaaacccccccccccccaaaaaaccaacccccccccckkkssssusssslmmmmmmmdddddacccc
abcccccccaaccccaaaaacccccccccccccaaaaaccccccaaaaaccckkkrssuuuussssqmmmmmmmmdddccccc
abcccccccaaccccaaaaaacccccccaaccccaaaaacccccaaaaacckkkkrruuuuuussqqqqqqmmmmdddccccc
abccccaaaaaaaacaaaaaacccccccaaaaccaaccaccccaaaaaacjkkkrrruuuxuuusqqqqqqqmmmmeeccccc
abcaaaaaaaaaaacaaaaaccccccaaaaaacccccaaccccaaaaajjjjrrrrruuuxxuvvvvvvvqqqmmmeeccccc
abcaacccaaaaccccaaaaaaacccaaaaacccacaaaccccaaaajjjjrrrrruuuxxxxvvvvvvvqqqmmeeeccccc
abaaaaccaaaaacccccccaaaccccaaaaacaaaaaaaacccaajjjjrrrrtuuuuxxxyvyyyvvvqqqnneeeccccc
abaaaaaaaaaaacccaaaaaaaccccaacaacaaaaaaaacccccjjjrrrttttuxxxxxyyyyyvvvqqnnneeeccccc
abaaaaaaaccaacccaaaaaaaaacccccccccaaaaaaccccccjjjrrrtttxxxxxxxyyyyyvvvqqnnneeeccccc
SbaaaaaacccccccccaaaaaaaaaccccccccaaaaacccccccjjjrrrtttxxxEzzzzyyyvvrrrnnneeecccccc
abaaaaacccccccccccaaaaaaacccccccccaaaaaaccccccjjjqqqtttxxxxxyyyyyvvvrrrnnneeecccccc
abaaacccccccccccaaaaaaaccaaccccccccccaaccaaaaajjjqqqttttxxxxyyyyyyvvrrrnnneeecccccc
abaaacccccccccccaaaaaaaccaaacaaacccccccccaaaaajjjjqqqtttttxxyywyyyywvrrnnnfeecccccc
abcaaacccccccaaaaaaaaaaacaaaaaaaccccccccaaaaaaciiiiqqqqtttxwyywwyywwwrrrnnfffcccccc
abcccccccccccaaaaaaaaaaccaaaaaacccccccccaaaaaacciiiiqqqqttwwywwwwwwwwrrrnnfffcccccc
abccccccccccccaaaaaacccaaaaaaaacccccccccaaaaaaccciiiiqqqttwwwwwswwwwrrrrnnfffcccccc
abccccccccccccaaaaaacccaaaaaaaaacccccccccaaacccccciiiqqqtswwwwssssrrrrrroofffcccccc
abccccccaaaaacaaaaaacccaaaaaaaaaaccccccccccccccccciiiqqqssswsssssssrrrrooofffaccccc
abccccccaaaaacaaccaaccccccaaacaaacccccccccccccccccciiiqqssssssspoorrrooooofffaacccc
abcccccaaaaaacccccccccccccaaacccccccccccccccccccccciiiqppssssspppooooooooffffaacccc
abcccccaaaaaacccccccccccccaacccccccccccccccccccccccciipppppppppppoooooooffffaaccccc
abcccccaaaaaaccccccccccccccccccccccccccccccccccccccciihppppppppgggggggggfffaaaccccc
abccccccaaacccccccccccccccccccccccaccccccccccccccccchhhhpppppphggggggggggfaaaaccccc
abaaaccccccccccccccccccccccaccccaaacccccccccccccccccchhhhhhhhhhgggggggggcaacccccccc
abaaccaaaccaccccccccccccccaaacccaaacaacccaaaaacccccccchhhhhhhhhgaaccccccccccccccccc
abaaacaaacaacccccccccaaaccaaaacaaaaaaaaccaaaaaccccccccchhhhhhaaaaacccccccccccccccca
abaaaccaaaaaccccccccccaaacaaaaaaaacaaaaccaaaaaaccccccccccaaacccaaaacccccccccccaccca
abcccaaaaaaccccccccccaaaaaaaaaaaaacaaaaccaaaaaaccccccccccaaaccccaaaccccccccccaaaaaa
abcccaaaaaaaacccccccaaaaaaaaaaaaaaaaaccccaaaaaacccccccccccccccccccccccccccccccaaaaa
abcccaacaaaaaccccccaaaaaaaaaaaaaaaaaaacccccaacccccccccccccccccccccccccccccccccaaaaa`
).split(`\n`).map(str=>str.split('').map(node=>node=='S' ? -1 : node=='E' ? -26 : node.charCodeAt(0) - 96))

let flatArray = input.map((row,yPos)=>{
  const arr = row.map((spot,xPos)=>{
    const N = yPos > 0 ? [0,1].includes(input[yPos - 1][xPos] - Math.abs(spot)) ? {x:xPos, y:yPos - 1} : false : false,
          E = xPos < 82 ? [0,1].includes(input[yPos][xPos + 1] - Math.abs(spot)) ? {x:xPos + 1, y:yPos} : false : false,
          S = yPos < 40 ? [0,1].includes(input[yPos + 1][xPos] - Math.abs(spot)) ? {x:xPos, y:yPos + 1} : false : false,
          W = xPos > 0 ? [0,1].includes(input[yPos][yPos - 1] - Math.abs(spot)) ? {x:xPos - 1, y:yPos} : false : false
    if (spot == -1) {
      shortHike.start = {
        x:xPos,
        y:yPos,
        height: 1,
        neighbours: [N,E,S,W].filter(x=>x!==false),
        parent: null
      }
      shortHike.openNodes.push(shortHike.start)
      spot = 1
    } else if (spot == -26) {
      shortHike.end = {
        x:xPos,
        y:yPos,
        height: 26,
        neighbours: [N,E,S,W].filter(x=>x!==false),
        parent: null
      }
      spot = 26
    }
    return {
      x: xPos,
      y: yPos,
      height: spot,
      neighbours: [N,E,S,W].filter(x=>x!==false),
      parent: null
    }
  })
  shortHike.manhattanDist = manhattanHeuristic(shortHike.start, shortHike.end)
  return arr
}).flat().map(node=>{
  node.heurStart = manhattanHeuristic({x:node.x,y:node.y}, shortHike.start)
  node.heurEnd = manhattanHeuristic({x:node.x,y:node.y}, shortHike.end)
  return node
})

flatArray = flatArray.filter(x=>x.heurStart == 0).concat(flatArray.filter(x=>x.heurStart !== 0))

const findPath = () => {
  let currNode = shortHike.openNodes[0]
  if (currNode.x == shortHike.end.x && currNode.y == shortHike.end.y) {
    let activeNode = currNode
    shortHike.paths.push(currNode)
    while (activeNode.parent) {
      shortHike.paths.push(activeNode.parent)
      activeNode = activeNode.parent
    }
  }
}





console.log(flatArray)
console.log(shortHike)