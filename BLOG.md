 `ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp`

Array Example: 
```[8,4,23,42,16,15]```
 <br><br>
 Pass 1:
 - Original:
 | 8 | 4 | 23 | 16 | 15 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |
<br><br>
- After pass (Pivot point is assigned as the end point, in this case, index 4): 
 | 4 | 8 | 23 | 16 |      15 |<br>
 |---|---|----|----|     ----|<br>
 | 0 | 1 | 2  | 3  |      4  |  
<br><br><br><br>
 Pass 2:
- After pivot is identified, lower values move to the left, higher t the right making the pivot index:
 | 4 | 8 | 15 | 23 | 16 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 2  | 3  | 4  |  
<br><br>
- After pass: 
 | 4 | 8 |      15 |      23 | 16 |<br>
 |---|---|     ----|     ----|----|<br>
 | 0 | 1 |      0  |      0  | 1  |  
<br><br><br><br>
 Pass 3:
- Original:
 | 4 | 8 |      15 |      23 | 16 |<br>
 |---|---|     ----|     ----|----|<br>
 | 0 | 1 |      0  |      0  | 1  |  
<br><br>
- After pass:  
 | 4 |      8 |      15 |      23 |      16 |<br>
 |---|     ---|     ----|     ----|     ----|<br>
 | 0 |      0 |      0  |      0  |      0  |  
<br><br><br><br>
 Pass 4:
- Original:
 | 4 |      8 |      15 |      23 |      16 |<br>
 |---|     ---|     ----|     ----|     ----|<br>
 | 0 |      0 |      0  |      0  |      0  |  
<br><br>
- After pass: 
 | 4 | 8 |      15 |      16 | 23 |<br>
 |---|---|     ----|     ----|----|<br>
 | 0 | 1 |      0  |      0  | 1  |  

  <br><br><br><br>
  
Pass 5:
- Original:
 | 4 | 8 |      15 |      16 | 23 |<br>
 |---|---|     ----|     ----|----|<br>
 | 0 | 1 |      0  |      0  | 1  |  
<br><br>
- After pass: 
 | 4 | 8 | 15 | 16 | 23 |<br>
 |---|---|----|----|----|<br>
 | 0 | 1 | 0  | 0  | 0  |  
