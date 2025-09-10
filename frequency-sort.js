function frequencySort(arr) {
    const frequencyMap = new Map();

    // Count the frequency of each element
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Sort the array based on frequency
    const sortedArray = [...arr].sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        // If frequencies are equal, sort by value
        if (freqA === freqB) {
            return a - b;
        }
        return freqB - freqA; // Sort by frequency descending
    });

    return sortedArray;
}

// Example usage:
const arr = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(arr)); // Output: [2, 2, 2, 1, 1, 3]