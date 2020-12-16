const input = [
  118,
  14,
  98,
  154,
  71,
  127,
  38,
  50,
  36,
  132,
  66,
  121,
  65,
  26,
  119,
  46,
  2,
  140,
  95,
  133,
  15,
  40,
  32,
  137,
  45,
  155,
  156,
  97,
  145,
  44,
  153,
  96,
  104,
  58,
  149,
  75,
  72,
  57,
  76,
  56,
  143,
  11,
  138,
  37,
  9,
  82,
  62,
  17,
  88,
  33,
  5,
  10,
  134,
  114,
  23,
  111,
  81,
  21,
  103,
  126,
  18,
  8,
  43,
  108,
  120,
  16,
  146,
  110,
  144,
  124,
  67,
  79,
  59,
  89,
  87,
  131,
  80,
  139,
  31,
  115,
  107,
  53,
  68,
  130,
  101,
  22,
  125,
  83,
  92,
  30,
  39,
  102,
  47,
  109,
  152,
  1,
  29,
  86,
]

const getDiffs = (list) => {
  const ordered = [...list].sort((a, b) => a - b)
  ordered.push(ordered[ordered.length -1] + 3)
  let pastJolt = 0
  let ones = 0
  let twos = 0
  let threes = 0
  ordered.forEach((i) => {
    const diff = i - pastJolt
    if (diff === 1) {
      ones++
    }
    if (diff === 2) {
      twos++
    }
    if (diff === 3) {
      threes++
    }
    pastJolt  = i
  })
  console.log('1 diff', ones)
  console.log('2 diff', twos)
  console.log('3 diff', threes)
}

const getOptions = (list) => {
  const ordered = [...list].sort((a, b) => a - b)
  ordered.push(ordered[ordered.length -1] + 3)
  ordered.unshift(0)
  let pastJolt = 0
  let ones = 0
  let twos = 0
  let threes = 0
  let idx = 0

  const groups = [[]]
  ordered.forEach((i) => {
    const diff = i - pastJolt
    if (diff === 1) {
        groups[idx].push(i)
      } else {
        groups.push([i])
        idx++
    }
    pastJolt  = i
  })

  let acc = 1
  groups.forEach((group) => {
    const set = group.slice(1)
    if (set.length === 0 || set.length === 1) {
      return
    }
    if (set.length === 2) {
      acc *= 2
    }
    if (set.length === 3) {
      acc *= 4
    }
    if (set.length === 4) {
      acc *= 7
    }
    if (set.length === 5) {
      acc *= 13
    }
  })
  console.log(acc)
}

getDiffs(input)
getOptions(input)
