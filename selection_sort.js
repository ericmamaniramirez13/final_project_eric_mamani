function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
      console.log("It Swaped: ", arr[i], arr[lowest])
      console.log(arr)
    }
    return arr
  }
  let array = [4,2,-3,-17,7]
  console.log(array)
  console.log(selectionSort(array))