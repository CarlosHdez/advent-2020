const example = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
]
const input = [
  'LLLLL.L.LLLLLLL.LL.LLLLL.LLLLLLL..LLLLL.LLLLL.L..LLLLL..LLLLLLLL.LLLL.LLL.LLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLL.LLLLL',
  'LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.L.LLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLL.LLLLLL.LLLL.LLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLL.L.LLLLLLLL.LLLLLLLLL.LLLLLLLL..LLLLLLLLLLLLL.LLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LL.LLLLLL.LLLLL.LL.LLLLLLLLL..LLLLLLLLLLLLLLLL',
  'L.....L.....LL.LL.L.L..L............L.L.L.........L...L...LLLL..L.....L.L.L.....L.LLLL.....L',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL..LLLLL.LLLLLLLL.LLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLL',
  '.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLL.LLLLL.L.LL',
  'LLLL.LL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL',
  'LL.LLL..LLLLL.LLLLLLL.L.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL..LLLLLLL..LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLL..LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLL.LLL.LLLLLLLLL.L.LLLL.LLLL.LLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.L.LLLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLL',
  'L..L..L.L.LLL.....L......LL.L.LL.L.LL....L.....LL..LL..LL...L....L.L.L......L..L.L.LL..LLLLL',
  'LLLLLLL.LLLLL.LLLLLLL.L.LLLL.LLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL..LLLLLLLL.LLLLLL..LLLLLLLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL.LLLLLLLL.L',
  'LLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.',
  'LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL..LLLLLLLL.LLL.L.LLLLLL.LLL.LLLLLLLL.LLLLLL..LLLLLLLLL',
  'LLLLL.LLLLL.L.LLLLL.LLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLL.LL.LLLLLLLLLL',
  '..LL..L.L..LL..L..LL...LLL.L.L.L.......L........L........L.L......L.L..LL...L..LLLLL..L.....',
  'LLLLLLL.LLLLL.LLLLLL.L..L.LLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLLLL.LLL.LLLL.LLLLLLL.LL',
  'LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LL.L',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL',
  '..LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLL.LLL.LLLLLLLLL.LLL.LL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  '....L...L.....L.....LLLL......L.L......L........LL...L....LLLL....LL......LL...........L.L.L',
  'LLLLLLL.LLLLLLLLLLLL.LL.L.LL.LLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LL.LL..LLLLLLLLLL',
  'LLLL.LL.L.LLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.L.LLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLL',
  'LLLLLLL.LLLLL..LLLLLLLL.LLLLLLLL.LLLLL..LLLLL.LLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLL...LLLLLLLLLL.LL.LLLLLLLLLLLLLLLLL.L..LLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL..LLL.LL..LLL....LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLL',
  'LLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLL',
  'LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLL.LLLLL.LLLL.LLLL.LLLLLLLLL.LL.LL..LLLLLLLLLL',
  'LL......L.....LL....L.L..L.L.L..L..L......LL...L.L.L.LL..LLLL.LLL....L..L...L...L..L.LLL..L.',
  'LLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLL..LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL..LLLL.LLLLLLLLLL.LLLLLL.LLL.LL.L.LLLLLLLL.L',
  'LLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LL..LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L',
  'LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLL..LLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL',
  '.....L....L.......L...L..LL.LL.LL.L.L.L..L..L..LLL..L.......LL.LL..LL......LL.L..L....L.....',
  'LL.LLLL.LLLLL.LLLLLLLLL.LLLLL..LLLLLLLL..LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLL..LLLL',
  'LLLLL.L.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL',
  'LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLLLLLL.LLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.L.LLL.LL.LLLLLL.LLLLLLLL.LL..LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  '.....LL.....L.L...............L..........LLL................LLLL.....L.L............L..L..LL',
  'LLLLLL..LLL.L.LLLLLLLLLLLLLL.LLL.LL.LLL.LLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLL.LLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLLL.LLLLL.LLLLLLLLLL..LLLLL.LLLLLLLL.L',
  'LLLLLL..LLLLL.LLLL.LLLL.LLLLLLLL.LLLL.L.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLL.LLLLL.LLLLLLLLL..LLL.LLLLLLLLLLLLLLLLLLLLLL',
  '.L.L.L.......L...LL....LLL.L.....LL..L.L..LLLL......L.LL......L.L.L.....LL...L....L..L.LL..L',
  'LLLLLLL.L.LLL.LLLLLL.LL.LLLL.LLL.LLLLLL.LLLLLLLL.L..L.L.LLLLLLLL.LLLLLLLLL.LLL..LLLLL.LLLLLL',
  'LLLLLL..LLLLL.LLLLLLLLL.L.LLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLLLLLLL..LLLLLLLLL.L.LLLLLLL.LLLLL.LLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL',
  'LLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLL.',
  'L.......LL.....L..L....LLL..L..LL....LL....L.LL.......LLL.....LL.L...LLLLL..L..LL.LL.LL..LL.',
  'LLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLL.LL.LL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL...LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLL.L.L.LLLLLLLLLLLLL.LLLLLLLL..LLLLLLL..LL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL',
  'LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL..LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLL.LLLL.LLLL.LLLLLLLL.LL..LL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL',
  'L.LLLLL.LLLLLLLLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLL.L.LL',
  'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLLLLL.L.L..LLLL.LLLL.LLLLL.LLLLLLLLLL.LL.LLLLLLL',
  'LLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLL..LLLLLLLL.LLL.L.LLLL.LLL..LLLLLLLLLLLLLLLLLLLL.LLLLLL',
  '.L..LL...LL...L..LL......L.LLLL.L...L.LL..LLL............LL....LL.LL..L..L...L...L...L...LL.',
  'LL.LLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLL.L',
  'LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.',
  'LLLLLLL.LLLLL.LLLLLLLLL.LLLLL.L..LLLLLLL.LLLLLL..LLLLL.LLLLLLLLL.LL.LLLLLL.LL.LL.LLLLLLLLLLL',
  'LLL.LLL.LLLLL.LLL.LLLLL.LLLLLLL.LLLLLLL.L.LLLLLL.LLLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLL..L.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL..LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLL..L.LLL.L.LLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL',
  'LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLL.L.LLLLLLLL.LLLLLLL.L..LLLLLLLL.LLLL.L.LLLLLLLLLL',
  'LLLLLLLLLLLLL.L.LLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLL.LLLL.',
  'LLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLL..LLLLLLLLL',
  'LLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLL',
]

const validateSeat = (y, x, floor) => {
  const pos = floor[x][y]
  if (pos === '.') {
    return '.'
  }
  const top = floor[x-1]
  const bot = floor[x+1]
  const topLeft = top ? floor[x-1][y-1] : 'L'
  const topMid = top ? floor[x-1][y] : 'L'
  const topRight = top ? floor[x-1][y+1] : 'L'
  const midLeft = floor[x][y-1]
  const midRight = floor[x][y+1]
  const botLeft = bot ? floor[x+1][y-1] : 'L'
  const botMid = bot ? floor[x+1][y] :'L'
  const botRight = bot ? floor[x+1][y+1] : 'L'
  const adjacent = [topLeft, topMid, topRight, midLeft, midRight, botLeft, botRight, botMid]
  if (pos === 'L') {
    const allClear = adjacent.every((v) => v === 'L' || v === '.' || !v)
    if (allClear) {
      return '#'
    }
    return 'L'
  }
  if (pos === '#') {
    const occupied = adjacent.filter((v) => v === '#')
    if (occupied.length >= 4) {
      return 'L'
    }
    return '#'
  }
}

const topestleftest = (x, y, floor) => {
  const foundseat = false
  while (!foundseat) {

  }
}

const validationFirstSeen = (y, x, floor) => {
  const pos = floor[x][y]
  if (pos === '.') {
    return '.'
  }
  const top = floor[x-1]
  const bot = floor[x+1]
  // const topMid = top ? floor[x-1][y] : 'L'
  // const topRight = top ? floor[x-1][y+1] : 'L'
  // const midLeft = floor[x][y-1]
  // const midRight = floor[x][y+1]
  // const botLeft = bot ? floor[x+1][y-1] : 'L'
  // const botMid = bot ? floor[x+1][y] :'L'
  // const botRight = bot ? floor[x+1][y+1] : 'L'
  // const adjacent = [topLeft, topMid, topRight, midLeft, midRight, botLeft, botRight, botMid]
  if (pos === 'L') {
    const allClear = adjacent.every((v) => v === 'L' || v === '.' || !v)
    if (allClear) {
      return '#k'
    }
    return 'L'
  }
  if (pos === '#') {
    const occupied = adjacent.filter((v) => v === '#')
    if (occupied.length >= 4) {
      return 'L'
    }
    return '#'
  }
}

const runSimulation = (floor) => {
  let newFloor = []
  const temp = [floor[0]]
  floor.forEach((row, y) => {
    const newRow = []
    const seats = row.split('')
    seats.forEach((col, x) => {
      newRow.push(validateSeat(x, y, floor))
    })
    newFloor.push(newRow.join(''))
  })
  return newFloor
}

const areEqual = (floor, updated) => floor.every((row, i) => row === updated[i])

const eventualFree = (floor) => {
  let prev = floor
  let sameAsPrev = false
  do {
    const iteration = runSimulation(prev)
    sameAsPrev = areEqual(prev, iteration)
    prev = iteration
  } while (!sameAsPrev)
  let empty = 0
  prev.forEach((row, i) => {
    const seats = row.split('')
    seats.forEach((col, j) => {
      empty = prev[i][j] === '#' ? empty + 1 : empty
    })
  })
  console.log(empty)
}

eventualFree(input)
