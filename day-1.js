const test = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

const findComplement = (base, list) => {
  let complement
  const exists = list.some((val) => {
    complement = val
    return complement + base === 2020
  })
  if (exists) {
    return complement
  }
  return null
}

const findTwo = (list) => {
  let start = 0
  let i = list[start]
  let j
  let found = false

  while (!found) {
    j = findComplement(i, list.slice(start + 1))
    if (!j) {
      start += 1
      i = list[start]
    } else {
      found = true
    }
  }
  console.log(i)
  console.log(j)
  console.log('Answer', i*j)
  return i * j
}

const findThree = (list) => {
  let idx = 0
  let secondIdx = idx + 1
  let i = list[idx]
  let j = list[secondIdx]
  let k
  let found = false

  while (!found) {
    k = findComplement(i + j, list.slice(secondIdx + 1))
    if (!k) {
      if (secondIdx + 1 < list.length - 1) {
        secondIdx += 1
      } else {
        idx += 1
        secondIdx = idx + 1
        i = list[idx]
      }
      j = list[secondIdx]
    } else {
      found = true
    }
  }
  console.log(i)
  console.log(j)
  console.log(k)
  console.log('Answer', i*j*k)
  return i * j * k
}

findTwo(test)
findThree(test)
