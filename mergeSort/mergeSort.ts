const merge: (left: Array<number>, right: Array<number>) => Array<number> = (left, right) => {
  const arr: Array<number> = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left[0])
      left.shift()
    } else if (left[0] > right[0]) {
      arr.push(right[0])
      right.shift()
    }
  }

  return [...arr, ...left, ...right]
}

const mergeSort: (array: Array<number>) => Array<number> = array => {
  if (array.length <= 1) return array

  const half = Math.floor(array.length / 2)

  const left = array.splice(0, half)
  const right = array

  return merge(mergeSort(left), mergeSort(right))
}

const array: Array<number> = []

for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * 100))
}

console.log(mergeSort(array))
