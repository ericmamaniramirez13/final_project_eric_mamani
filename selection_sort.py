# Selection sort
# time complexity O(n^2)
import random
def selectionSort(array, size):
    for ind in range(size):
        min_index = ind
        for j in range(ind + 1, size):
			# select the minimum element in every iteration
            if array[j] < array[min_index]:
                min_index = j
        print("It Swaped: ", array[ind], array[min_index])
        array[ind], array[min_index] = array[min_index], array[ind]
        print(array)

arr = random.sample(range(-10, 30), 10)
print("Input Array: ",arr,"\n")
size = len(arr)
selectionSort(arr, size)
