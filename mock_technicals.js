// Given an array arr.  You can choose a set of integers and remove 
// all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Input: arr = [3,5,5,5,2,2,7,7,7,7]
// Output: 2


function minSetSize(arr) {
    let targetLength = arr.length / 2;
    let count = 0;
    let accumCount = 0;
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }

    let valuesArray = Object.values(obj).sort((a, b) => b - a);

    for (let i = 0; i < valuesArray.length; i++) {
        count += 1;
        accumCount += valuesArray[i];

        if (accumCount >= targetLength) {
            return count;
        }
    }

    return 0;
};